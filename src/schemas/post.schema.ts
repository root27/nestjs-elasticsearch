import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

@Schema()
export class Post {

  @Prop()
  title: string;

  @Prop()
  content: string;

  @Prop()
  author: string;

}

export const PostSchema = SchemaFactory.createForClass(Post);
