import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

export type MovieDocument = Movie & Document;

@Schema()
@ObjectType()
export class Movie {
  @Prop({ required: true })
  @Field()
  title: string;

  @Prop()
  @Field()
  subtitle: string;

  @Prop()
  @Field()
  releaseYear: number;
}

export const MovieModel = SchemaFactory.createForClass(Movie);
