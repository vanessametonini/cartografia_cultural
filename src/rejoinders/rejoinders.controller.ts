import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RejoindersService } from './rejoinders.service';
import { CreateRejoinderDto } from './dto/create-rejoinder.dto';
import { UpdateRejoinderDto } from './dto/update-rejoinder.dto';

@Controller('rejoinders')
export class RejoindersController {
  constructor(private readonly rejoindersService: RejoindersService) {}

  @Post()
  create(@Body() createRejoinderDto: CreateRejoinderDto) {
    return this.rejoindersService.create(createRejoinderDto);
  }

  @Get()
  findAll() {
    return this.rejoindersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rejoindersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRejoinderDto: UpdateRejoinderDto) {
    return this.rejoindersService.update(id, updateRejoinderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rejoindersService.remove(id);
  }
}
