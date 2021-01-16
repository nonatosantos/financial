import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";

@Injectable()
export class BaseService<T> {
    constructor(
        private repository: Repository<T>) { }

    async getOne(id: string): Promise<T> {
        const entity = await this.repository.findOne(id);
        if (!entity) {
            throw new NotFoundException(`${this.repository.metadata.name} Not Found`);
        }
        return entity;
    }

    async createOne(payload: T): Promise<T> {
        const entity = this.repository.create({ ...payload });
        return this.repository.save(entity);
    }

    async getMany(): Promise<T[]> {
        return this.repository.createQueryBuilder('entity')
            .where('active = true')
            .getMany();
    }

    async remove(id: string): Promise<void> {
        const entity = await this.repository.findOne(id);
        if (!entity) {
            throw new NotFoundException(`${this.repository.metadata.name} Not Found`);
        }
        await this.repository.delete(id);
    }

    async update(id: string, payload: T): Promise<T> {
        let entity = await this.repository.findOne(id);
        if (!entity) {
            throw new NotFoundException(`${this.repository.metadata.name} Not Found`);
        }
        entity = Object.assign(entity, payload);
        return this.repository.save(entity);
    }
}