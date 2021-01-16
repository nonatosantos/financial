import { Body, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common";
import { BaseService } from "../services/base.service";

export class BaseController<T> {
    constructor(protected service: BaseService<T>) { }

    @Post()
    @HttpCode(201)
    async createOne(@Body() body: T) {
        return this.service.createOne(body);
    }

    @Get()
    @HttpCode(200)
    async getMany() {
        return this.service.getMany();
    }

    @Get(':id')
    @HttpCode(200)
    async getOne(@Param('id') id: string) {
        return this.service.getOne(id);
    }

    @Delete(':id')
    @HttpCode(204)
    async remove(@Param('id') id: string) {
        return this.service.remove(id);
    }
    
    @Put(':id')
    @HttpCode(200)
    async update(
        @Param('id') id: string,
        @Body() payload: T): Promise<T> {
        return this.service.update(id, payload);
    }
}