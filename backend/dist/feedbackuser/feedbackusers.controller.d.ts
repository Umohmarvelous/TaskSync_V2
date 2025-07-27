import { FeedbackusersService } from './feedbackusers.service';
import { CreateFeedbackuserDto } from './dto/create-feedbackuser.dto';
export declare class FeedbackusersController {
    private readonly feedbackService;
    constructor(feedbackService: FeedbackusersService);
    create(createFeedbackDto: CreateFeedbackuserDto): Promise<CreateFeedbackuserDto>;
    findAll(): Promise<CreateFeedbackuserDto[]>;
    findOne(id: number): Promise<CreateFeedbackuserDto>;
    update(id: number, createFeedbackDto: CreateFeedbackuserDto): Promise<CreateFeedbackuserDto>;
    remove(id: number): Promise<String>;
}
