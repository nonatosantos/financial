import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BaseService } from "../../../common/services/base.service";
import { UserEntity } from "../entities/user.entity";

@Injectable()
export class UserService extends BaseService<UserEntity>{
    constructor(@InjectRepository(UserEntity) reposistory: Repository<UserEntity>) {
        super(reposistory);
    }
}