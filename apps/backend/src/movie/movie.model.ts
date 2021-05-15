import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Field, Int, ObjectType } from '@nestjs/graphql';

export type MovieDocument = Movie & Document;

@Schema()
@ObjectType()
export class Movie {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Prop({ required: true })
  @Field(() => String)
  title: string;

  @Prop()
  @Field(() => String)
  subtitle: string;

  @Prop()
  @Field(() => Int)
  releaseYear: number;
}

export const MovieModel = SchemaFactory.createForClass(Movie);
