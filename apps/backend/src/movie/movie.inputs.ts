import { Field, InputType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

@InputType()
export class CreateMovieInput {
  @Field()
  title: string;
  @Field()
  subtitle: string;
  @Field()
  releaseYear: number;
}

@InputType()
export class ListMovieInput {
  @Field(() => String, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId;
  @Field(() => String, { nullable: true })
  title?: string;
  @Field(() => String, { nullable: true })
  subtitle?: string;
  @Field(() => String, { nullable: true })
  releaseYear?: number;
}

@InputType()
export class UpdateMovieInput {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;
  @Field(() => String, { nullable: true })
  title?: string;
  @Field(() => String, { nullable: true })
  subtitle?: string;
  @Field(() => String, { nullable: true })
  releaseYear?: number;
}
