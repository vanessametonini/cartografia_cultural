import { Module } from '@nestjs/common';
import { SupportsService } from './supports.service';
import { SupportsController } from './supports.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Support, SupportSchema } from './schemas/support.schema';
import { TopicsService } from '../topics/topics.service';
import { TopicsModule } from '../topics/topics.module';


@Module({
  imports: [
    TopicsModule,
    MongooseModule.forFeatureAsync([
      {
        name: Support.name,
        useFactory: () => {
          SupportSchema.set('toJSON', {
            transform: function (doc, ret, options) {
              ret.id = ret._id;
              delete ret._id;
              delete ret.__v;
            }
          });
          return SupportSchema;
        },
      },
    ])
  ],
  controllers: [SupportsController],
  providers: [SupportsService],
  exports: [SupportsService]
})
export class SupportsModule {}
