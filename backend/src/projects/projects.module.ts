
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectController } from './projects.controller';
import { ProjectService } from './projects.service';
import { Userproject } from './project.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Userproject])],
    providers: [ProjectService],
    controllers: [ProjectController],
})

export class UsersProjectModule { }


