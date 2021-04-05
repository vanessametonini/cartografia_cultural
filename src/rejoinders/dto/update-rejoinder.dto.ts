import { PartialType } from '@nestjs/swagger';
import { CreateRejoinderDto } from './create-rejoinder.dto';

export class UpdateRejoinderDto extends PartialType(CreateRejoinderDto) {}
