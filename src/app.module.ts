import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from './common/common.module';
import { ConfigService } from './common/services/config.service';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    CommonModule,
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => configService.typeOrmConfig,
      inject: [ConfigService],
      imports: [UsersModule]
    }),
  ],
})
export class AppModule { }
