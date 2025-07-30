import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Userproject } from './project.entity';
import { CreateProjectDto } from './dto/create-userproject.dto';
import { UpdateProjectDto } from './dto/update-userproject.dto';

@Injectable()
export class ProjectService {
    constructor(
        @InjectRepository(Userproject) private readonly projectRepository: Repository<Userproject>,
    ) { }

    async create(createProjectDto: CreateProjectDto): Promise<CreateProjectDto[]> {
        // Fetch all users and sort by id ascending
        const allUsers = await this.projectRepository.find({ order: { id: 'ASC' } });
        // Set new id as next highest
        const nextId = allUsers.length > 0 ? allUsers[allUsers.length - 1].id + 1 : 1;
        const user = this.projectRepository.create({ ...createProjectDto, id: nextId });

        // Check for duplicate projectAcronym
        const exists = allUsers.find(u => u.projectAcronym === createProjectDto.projectAcronym);
        if (exists) {
            throw new BadRequestException('User with this information already exists');
        }

        await this.projectRepository.save(user);
        // Return all users sorted by id ascending
        return await this.projectRepository.find({ order: { id: 'ASC' } });
    }
    // Hotel peggy behind delta careers school
    // 08057254642

    async findAll(): Promise<CreateProjectDto[]> {
        try {
            return await this.projectRepository.find();
        } catch (error) {
            throw new BadRequestException('Failed to retrieve feedbacks. Please try again.');
        }
    }

    ////////////////////
    async findOne(id: number): Promise<CreateProjectDto> {
        // Validate ID parameter
        if (!id || isNaN(id) || id <= 0) {
            throw new BadRequestException('Invalid feedback user ID provided');
        }

        try {
            const projectusers = await this.projectRepository.findOneBy({ id });
            if (!projectusers) {
                throw new NotFoundException(`Feedback user with ID ${id} not found`);
            }
            return projectusers;
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw new BadRequestException('Failed to retrieve feedback user. Please try again.');
        }
    }

    async update(id: number, updateProjectDto: UpdateProjectDto): Promise<UpdateProjectDto> {
        if (!id || isNaN(id) || id <= 0) {
            throw new BadRequestException('Invalid feedback user ID provided');
        }
        if (Object.keys(updateProjectDto).length === 0) {
            throw new BadRequestException('No update data provided');
        }
        try {
            const projectusers = await this.projectRepository.findOneBy({ id });
            if (!projectusers) {
                throw new NotFoundException(`Feedback user with ID ${id} not found`);
            }
            // Check for duplicate projectAcronym (excluding current user)
            const duplicate = await this.projectRepository.findOne({
                where: { projectAcronym: updateProjectDto.projectAcronym },
            });
            if (duplicate && duplicate.id !== id) {
                throw new BadRequestException('users already exist');
            }
            Object.assign(projectusers, updateProjectDto);
            await this.projectRepository.update(id, updateProjectDto);
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

    async remove(id: number): Promise<string> {
        if (!id || isNaN(id) || id <= 0) {
            throw new BadRequestException('Invalid feedback user ID provided');
        }
        try {
            const projectusers = await this.projectRepository.findOneBy({ id });
            if (!projectusers) {
                return 'No user found';
            }
            await this.projectRepository.delete(id);
            // Reassign IDs to all users sequentially
            const allUsers = await this.projectRepository.find({ order: { id: 'ASC' } });
            for (let i = 0; i < allUsers.length; i++) {
                if (allUsers[i].id !== i + 1) {
                    await this.projectRepository.update(allUsers[i].id, { id: i + 1 } as any);
                }
            }
            return `user with id deleted successful`;
        } catch (error) {
            if (error.code === 'ER_ROW_IS_REFERENCED_2') {
                throw new BadRequestException('Cannot delete feedback user. Feedback user has associated data.');
            }
            throw new BadRequestException('Failed to delete feedback user. Please try again.');
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
