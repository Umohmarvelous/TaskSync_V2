import { Repository } from 'typeorm';
import { Feedbackuser } from './feedbackuser.entity';
import { CreateFeedbackuserDto } from './dto/create-feedbackuser.dto';
export declare class FeedbackusersService {
    private readonly feedbacksRepository;
    constructor(feedbacksRepository: Repository<Feedbackuser>);
    create(createFeedbackDto: CreateFeedbackuserDto): Promise<CreateFeedbackuserDto>;
    findAll(): Promise<CreateFeedbackuserDto[]>;
    findOne(id: number): Promise<CreateFeedbackuserDto>;
    update(id: number, createFeedbackDto: CreateFeedbackuserDto): Promise<CreateFeedbackuserDto>;
    remove(id: number): Promise<String>;
}
