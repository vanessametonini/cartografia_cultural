import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { MulterModule } from '@nestjs/platform-express';
import { GridFsMulterConfigService } from './multer-config.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    UsersModule,
    MulterModule.registerAsync({
      useClass: GridFsMulterConfigService,
    }),
  ],
  controllers: [FilesController],
  providers: [GridFsMulterConfigService, FilesService]
})
export class FilesModule { }
