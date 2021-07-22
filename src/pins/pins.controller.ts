import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { PinsService } from './pins.service';
import { CreatePinDto } from './dto/create-pin.dto';
import { CreatelocationDto } from './dto/create-location.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ValidateUserGuard } from 'src/auth/validate-user.guard';
import { AddressDelimitationPipe } from './address-delimitation.pipe';

@Controller('pins')
export class PinsController {
  constructor(private readonly pinsService: PinsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body(new AddressDelimitationPipe()) createPinDto: CreatePinDto) {
    return this.pinsService.create(createPinDto);
  }

  @Get()
  findAll() {
    return this.pinsService.findAll();
  }

  @Get('location')
  getlocation(@Body() createlocationDto: CreatelocationDto ) {
    return this.pinsService.getLocation(createlocationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pinsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard, ValidateUserGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body(new AddressDelimitationPipe()) updatedPin: CreatePinDto) {
    return this.pinsService.update(id, updatedPin);    
  }

  @UseGuards(JwtAuthGuard, ValidateUserGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pinsService.remove(id);
  }

  // @Get('deleted/all')
  //   findAllDeletedPins() {
  //     return this.pinsService.findAllDeletedPins();
  //   }
  
  // @Get('deleted/:id')
  // findDeletedPinsByUserId(@Param('id') id: string) {
  //   return this.pinsService.findDeletedPinsByUserId(id);
  // }
}
