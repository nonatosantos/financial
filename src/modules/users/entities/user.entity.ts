import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {

    @Column({ nullable: false, type: 'varchar', length: 60 })
    firstName: string;

    @Column({ nullable: false, type: 'varchar', length: 60 })
    lastName: string;

    @Column({ nullable: true, type: 'varchar', length: 20 })
    phone: string;

    @Column({ nullable: false, type: 'varchar', length: 100, unique: true })
    email: string;

    @Column({ nullable: false, type: 'varchar', length: 1024 })
    password: string;

    @Column({ nullable: false, type: 'bool', default: false })
    admin: boolean;
}