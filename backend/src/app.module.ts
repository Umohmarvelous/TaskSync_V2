import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { FeedbackUsersModule } from './feedbackuser/feedbackusers.module';
// import { User } from './users/user.entity';
// import { Task } from './tasks/task.entity';
// import { Feedbackuser } from './feedbackuser/feedbackuser.entity';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      // entities: [User, Task, Feedbackuser],
      entities: [join(process.cwd(), 'dist/**/*.entity.js')],
      autoLoadEntities: true,
      synchronize: process.env.NODE_ENV !== 'production', // Set to false in production!
      logging: process.env.NODE_ENV !== 'production',
    }),
    TasksModule,
    UsersModule,
    FeedbackUsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
