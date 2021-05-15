import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Movie } from './movie.model';
import { MovieService } from './movie.service';
import {
  CreateMovieInput,
  ListMovieInput,
  UpdateMovieInput,
} from './movie.inputs';
import { Schema as MongooseSchema } from 'mongoose';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Resolver(() => Movie)
export class MoviesResolver {
  constructor(private readonly movieService: MovieService) {}

  @Query(() => Movie)
  async movie(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId
  ) {
    return this.movieService.getById(_id);
  }

  @Query(() => [Movie])
  @UseGuards(AuthGuard('oauth-bearer'))
  async movies(@Args('filters', { nullable: true }) filters?: ListMovieInput) {
    return this.movieService.list(filters);
  }

  @Mutation(() => Movie)
  async createMovie(@Args('payload') payload: CreateMovieInput) {
    return this.movieService.create(payload);
  }

  @Mutation(() => Movie)
  async updateMovie(@Args('payload') payload: UpdateMovieInput) {
    return this.movieService.update(payload);
  }

  @Mutation(() => Movie)
  async deleteMovie(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId
  ) {
    return this.movieService.delete(_id);
  }
}
