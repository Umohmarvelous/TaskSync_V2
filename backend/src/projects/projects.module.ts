
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectController } from './projects.controller';
import { ProjectService } from './projects.service';
import { UserProject } from './project.entity';

@Module({
    imports: [TypeOrmModule.forFeature([UserProject])],
    providers: [ProjectService],
    controllers: [ProjectController],
    // exports: [FeedbackusersService],    
})

export class UsersProjectModule { }


