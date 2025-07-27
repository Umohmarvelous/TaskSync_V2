
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbackusersController } from './feedbackusers.controller';
import { FeedbackusersService } from './feedbackusers.service';
import { Feedbackuser } from './feedbackuser.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Feedbackuser])],
    providers: [FeedbackusersService],
    controllers: [FeedbackusersController],
    // exports: [FeedbackusersService],    
})

export class FeedbackUsersModule { } 



// import { Module } from '@nestjs/common';
// import { FeedbackusersController } from './feedbackusers.controller';
// import { FeedbackusersService } from './feedbackusers.service';

// @Module({
//     controllers: [FeedbackusersController],
//     providers: [FeedbackusersService]
// })
// export class UsersModule { }

