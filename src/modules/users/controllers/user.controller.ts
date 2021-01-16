import { Controller } from '@nestjs/common';
import { BaseController } from '../../../common/controllers/base.controller';
import { UserEntity } from '../entities/user.entity';
import { UserService } from '../services/user.service';

@Controller('users')
export class UserController extends BaseController<UserEntity> {
    constructor(protected readonly userService: UserService) {
        super(userService)
    }
}