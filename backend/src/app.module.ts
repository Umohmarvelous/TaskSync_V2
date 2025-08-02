import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { FeedbackUsersModule } from './feedbackuser/feedbackusers.module';
import { join } from 'path';
import { UsersProjectModule } from './projects/projects.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres', // changed from 'mysql' to 'postgres'
      host: process.env.DB_HOST,
      port: 5432, // default postgres port
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [join(process.cwd(), 'dist/**/*.entity.js')],
      autoLoadEntities: true,
      synchronize: process.env.NODE_ENV !== 'production', // Set to false in production!
      logging: process.env.NODE_ENV !== 'production',
    }),
    TasksModule,
    UsersModule,
    FeedbackUsersModule,
    UsersProjectModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
