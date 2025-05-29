import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({
  timestamps: true,
})
export class User {
  @Prop()
  name: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop({
    type: String,
    unique: true,
  })
  email: string;

  @Prop()
  password: string;

  @Prop({
    default: 'user',
  })
  role: string;

  @Prop({
    type: [{ type: String }],
    default: [],
  })
  refreshTokens: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
