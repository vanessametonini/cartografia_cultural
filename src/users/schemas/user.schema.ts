import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export type UserDocument = User & Document;

@Schema({
  writeConcern: {}
})
export class User {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  gender: string;

  @Prop()
  ageRange: string;

  @Prop()
  education: string;

  @Prop()
  avatar: string;

  @Prop()
  isAdmin: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
  categoryId: string;

  comparePassword: Function;
}

export const UserSchema = SchemaFactory.createForClass(User);