import { Field, InputType } from '@nestjs/graphql';

@InputType('MovieInput')
export class CreateMovieDto {
  @Field()
  title: string;
  @Field()
  subtitle: string;
  @Field()
  releaseYear: number;
}
