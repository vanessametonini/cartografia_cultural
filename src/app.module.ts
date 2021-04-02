import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://root:VMEcPZMp2bWRcO2H@gettingstarted-nd9xn.mongodb.net/test?retryWrites=true&w=majority'),
    CommandModule,
    CatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
