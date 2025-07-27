
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Feedbackuser } from './feedbackuser.entity';
import { CreateFeedbackuserDto } from './dto/create-feedbackuser.dto';
// import { UpdateFeedbackuserDto } from './dto/update-feedbackuser.dto';

@Injectable()
export class FeedbackusersService {
    constructor(
        @InjectRepository(Feedbackuser) private readonly feedbacksRepository: Repository<Feedbackuser>,
    ) { }

    async create(createFeedbackDto: CreateFeedbackuserDto): Promise<CreateFeedbackuserDto> {
        try {
            const user = this.feedbacksRepository.create(createFeedbackDto);

            return await this.feedbacksRepository.save(user);
        } catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new BadRequestException('User with this information already exists');
            }
            throw new BadRequestException('Failed to create user. Please try again.');
        }
    }

    async findAll(): Promise<CreateFeedbackuserDto[]> {
        try {
            return await this.feedbacksRepository.find();
        } catch (error) {
            throw new BadRequestException('Failed to retrieve feedbacks. Please try again.');
        }
    }

    ////////////////////
    async findOne(id: number): Promise<CreateFeedbackuserDto> {
        // Validate ID parameter
        if (!id || isNaN(id) || id <= 0) {
            throw new BadRequestException('Invalid feedback user ID provided');
        }

        try {
            const feedbackuser = await this.feedbacksRepository.findOneBy({ id });
            if (!feedbackuser) {
                throw new NotFoundException(`Feedback user with ID ${id} not found`);
            }
            return feedbackuser;
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw new BadRequestException('Failed to retrieve feedback user. Please try again.');
        }
    }

    // async update(id: number, updateFeedbackDto: UpdateFeedbackuserDto): Promise<Feedbackuser> {
    async update(id: number, createFeedbackDto: CreateFeedbackuserDto): Promise<CreateFeedbackuserDto> {
        // Validate ID parameter
        if (!id || isNaN(id) || id <= 0) {
            throw new BadRequestException('Invalid feedback user ID provided');
        }

        // Validate update data
        if (Object.keys(createFeedbackDto).length === 0) {
            throw new BadRequestException('No update data provided');
        }

        try {
            const feedbackuser = await this.feedbacksRepository.findOneBy({ id });
            if (!feedbackuser) {
                throw new NotFoundException(`Feedback user with ID ${id} not found`);
            }

            Object.assign(feedbackuser, createFeedbackDto)

            await this.feedbacksRepository.update(id, createFeedbackDto);

            return await this.findOne(id);
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw error;
            }
            if (error.code === 'ER_DUP_ENTRY') {
                throw new BadRequestException('Feedback user with this information already exists');
            }
            throw new BadRequestException('Failed to update feedback user. Please try again.');
        }
    }

    async remove(id: number): Promise<String> {
        // Validate ID parameter
        if (!id || isNaN(id) || id <= 0) {
            throw new BadRequestException('Invalid feedback user ID provided');
        }

        try {
            const feedbackuser = await this.feedbacksRepository.findOneBy({ id });
            if (!feedbackuser) {
                throw new NotFoundException(`Feedback user with ID ${id} not found`);
            }


            await this.feedbacksRepository.delete(id);
            const removedUser = (`Feedback user with ID ${id} Deleted Successful!`)
            return removedUser


        } catch (error) {
            if (error instanceof NotFoundException) {
                throw error;
            }
            if (error.code === 'ER_ROW_IS_REFERENCED_2') {
                throw new BadRequestException('Cannot delete feedback user. Feedback user has associated data.');
            }
            throw new BadRequestException('Failed to delete feedback user. Please try again.');
        } finally {
            ('Deleted successful!')
        }
    }
}

// import { Injectable } from '@nestjs/common';
// import { CreateFeedbackuserDto } from './dto/create-user.dto';
// import { UpdateFeedbackuserDto } from './dto/update-user.dto';
// import { NotFoundException } from '@nestjs/common';

// @Injectable()
// export class FeedbackusersService {
//     private feedbackUsers = [
//         {
//             "id": 1,
//             "name": "Leanne Graham",
//             "email": "Sincere@april.biz",
//             // "role": "INTERN",
//         },
//         {
//             "id": 2,
//             "name": "Ervin Howell",
//             "email": "Shanna@melissa.tv",
//             // "role": "INTERN",
//         },
//         {
//             "id": 3,
//             "name": "Clementine Bauch",
//             "email": "Nathan@yesenia.net",
//             // "role": "ENGINEER",
//         },
//         {
//             "id": 4,
//             "name": "Patricia Lebsack",
//             "email": "Julianne.OConner@kory.org",
//             // "role": "ENGINEER",
//         },
//         {
//             "id": 5,
//             "name": "Chelsey Dietrich",
//             "email": "Lucio_Hettinger@annie.ca",
//             // "role": "ADMIN",
//         }
//     ]

//     findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
//         if (role) {
//             const rolesArray = this.feedbackUsers.filter(feedbackUser => feedbackUser.role === role)
//             if (rolesArray.length === 0) throw new NotFoundException('User Role Not Found')
//             return rolesArray
//         }
//         return this.feedbackUsers
//     }

//     findOne(id: number) {
//         const feeduser = this.feedbackUsers.find(feedbackUser => feedbackUser.id === id)

//         if (!feeduser) throw new NotFoundException('User Not Found')

//         return this.feedbackUsers
//     }

//     create(createFeedbackuserDto: CreateFeedbackuserDto) {
//         const usersByHighestId = [...this.feedbackUsers].sort((a, b) => b.id - a.id)
//         const newUsers = {
//             id: usersByHighestId[0].id + 1,
//             ...createFeedbackuserDto
//         }
//         this.feedbackUsers.push(newUsers)
//         return newUsers
//     }

//     update(id: number, updateFeedbackuserDto: UpdateFeedbackuserDto) {
//         this.feedbackUsers = this.feedbackUsers.map(feedbackUser => {
//             if (feedbackUser.id === id) {
//                 return { ...feedbackUser, ...updateFeedbackuserDto }
//             }
//             return this.feedbackUsers
//         })

//         return this.findOne(id)
//     }

//     delete(id: number) {
//         const removedUser = this.findOne(id)

//         this.feedbackUsers = this.feedbackUsers.filter(feedbackUser => feedbackUser.id !== id)

//         return removedUser
//     }

// }
