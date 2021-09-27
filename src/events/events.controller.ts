import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ValidateEventUserGuard } from './validate-event-user.guard';
import { AddressDelimitationPipe } from 'src/address-delimitation.pipe';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body(new AddressDelimitationPipe()) createEventDto: CreateEventDto) {
    return this.eventsService.create(createEventDto);
  }

  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard, ValidateEventUserGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body(new AddressDelimitationPipe()) updateEvent: CreateEventDto) {
    return this.eventsService.update(id, updateEvent);
  }

  @UseGuards(JwtAuthGuard, ValidateEventUserGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsService.remove(id);
  }
}
