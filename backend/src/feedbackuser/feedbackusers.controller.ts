import { Controller, Get, Post, Body, Param, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { FeedbackusersService } from './feedbackusers.service';
import { Feedbackuser } from './feedbackuser.entity';
import { CreateFeedbackuserDto } from './dto/create-feedbackuser.dto';

@Controller('feedbackuser')
export class FeedbackusersController {
  constructor(private readonly feedbackService: FeedbackusersService) { }

  @Post()
  async create(@Body() createFeedbackDto: CreateFeedbackuserDto): Promise<CreateFeedbackuserDto> {
    return await this.feedbackService.create(createFeedbackDto);
  }

  @Get()
  async findAll(): Promise<CreateFeedbackuserDto[]> {
    return await this.feedbackService.findAll();
  }

  ///////////////
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<CreateFeedbackuserDto> {
    return await this.feedbackService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() createFeedbackDto: CreateFeedbackuserDto): Promise<CreateFeedbackuserDto> {
    return await this.feedbackService.update(id, createFeedbackDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<String> {
    return await this.feedbackService.remove(id);
  }
}

// import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
// import { FeedbackusersService } from './feedbackusers.service';
// import { CreateFeedbackuserDto } from './dto/create-user.dto';
// import { UpdateFeedbackuserDto } from './dto/update-user.dto';

// @Controller('users')
// export class FeedbackusersController {

//   constructor(private readonly feedbackService: FeedbackusersService) { }

//   @Get() // GET /users or /users?role=value
//   findAll() {
//     return this.feedbackService.findAll()
//   }

//   @Get(':id') // GET /users/:id
//   findOne(@Param('id', ParseIntPipe) id: number) {
//     return this.feedbackService.findOne(id)
//   }

//   @Post() // POST /users
//   create(@Body(ValidationPipe) createFeedbackuserDto: CreateFeedbackuserDto) {
//     return this.feedbackService.create(createFeedbackuserDto)
//   }

//   @Patch(':id') // PATCH /users/:id
//   update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateFeedbackuserDto: UpdateFeedbackuserDto) {
//     return this.feedbackService.update(id, UpdateFeedbackuserDto)
//   }

//   @Delete(':id') // DELETE /users/:id
//   delete(@Param('id', ParseIntPipe) id: number) {
//     return this.feedbackService.delete(id)
//   }

// }
