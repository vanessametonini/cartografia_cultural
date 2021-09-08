import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { TopicsService } from './topics.service';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ValidateTopicnUserGuard } from './validate-topic-user.guard';

@Controller('topics')
export class TopicsController {
  constructor(private readonly topicsService: TopicsService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createTopicDto: CreateTopicDto) {
    return this.topicsService.create(createTopicDto);
  }

  @Get()
  findAll() {
    return this.topicsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.topicsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard, ValidateTopicnUserGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updatedTopic: UpdateTopicDto) {
    return this.topicsService.update(id, updatedTopic);
  }

  @UseGuards(JwtAuthGuard, ValidateTopicnUserGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.topicsService.remove(id);
  }
}
