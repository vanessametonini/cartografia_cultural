import { Module } from '@nestjs/common';
import { RepliesService } from './replies.service';
import { RepliesController } from './replies.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Reply, ReplySchema } from './schemas/reply.schema';
import { TopicsModule } from '../topics/topics.module';
import { RejoindersModule } from 'src/rejoinders/rejoinders.module';
import { LikesModule } from 'src/likes/likes.module';

@Module({
  imports: [
    TopicsModule,
    RejoindersModule,
    LikesModule,
    MongooseModule.forFeatureAsync([
      {
        name: Reply.name,
        useFactory: () => {
          ReplySchema.set('toJSON', {
            transform: function (doc, ret, options) {
              ret.id = ret._id;
              delete ret._id;
              delete ret.__v;
            }
          });
          return ReplySchema;
        },
      },
    ])
  ],
  controllers: [RepliesController],
  providers: [RepliesService],
  exports: [RepliesService]
})
export class RepliesModule {} 
