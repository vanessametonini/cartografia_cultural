import { Module } from '@nestjs/common';
import { TopicsService } from './topics.service';
import { TopicsController } from './topics.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Topic, TopicSchema } from './schemas/topic.schema';
import { DeletedTopic, DeletedTopicSchema } from './schemas/deleted-topics.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Topic.name,
        useFactory: () => {
          TopicSchema.set('toJSON', {
            transform: function (doc, ret, options) {
              ret.id = ret._id;
              delete ret._id;
              delete ret.__v;
            }
          });
          return TopicSchema;
        },
      },
      {
        name: DeletedTopic.name,
        useFactory: () => {
          DeletedTopicSchema.set('toJSON', {
            transform: function (doc, ret, options) {
              ret.id = ret._id;
              delete ret._id;
              delete ret.__v;
            }
          });
          return DeletedTopicSchema;
        },
      },
    ])
  ],
  controllers: [TopicsController],
  providers: [TopicsService],
  exports: [TopicsService],
})
export class TopicsModule {}
 