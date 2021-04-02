import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { Cat, CatSchema } from './schemas/cat.schema';
import { CatCommand } from './cat.command';


@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  controllers: [CatController],
  providers: [CatService, CatCommand]
})
export class CatModule {}
