import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type DeletedEventDocument = DeletedEvent & Document;

@Schema({
    timestamps: true
})
export class DeletedEvent {

    @Prop({ type: mongoose.Schema.Types.ObjectId })
    userId: string;

    @Prop({ type: Object })
    data: Object;

}

export const DeletedEventSchema = SchemaFactory.createForClass(DeletedEvent);