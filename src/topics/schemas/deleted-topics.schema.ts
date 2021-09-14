import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type DeletedTopicDocument = DeletedTopic & Document;

@Schema({
    timestamps: true
})
export class DeletedTopic {

    @Prop({ type: mongoose.Schema.Types.ObjectId })
    userId: string;

    @Prop({ type: Object })
    data: Object;

}

export const DeletedTopicSchema = SchemaFactory.createForClass(DeletedTopic);
