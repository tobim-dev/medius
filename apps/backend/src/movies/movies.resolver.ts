import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Movie } from './movie.model';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/createMovie.dto';

@Resolver(() => Movie)
export class MoviesResolver {
  constructor(private readonly movieService: MoviesService) {}

  @Query(() => [Movie])
  movies(): Promise<Movie[]> {
    return this.movieService.findAll();
  }

  @Mutation(() => Movie)
  async addMovie(@Args('movieData') movieData: CreateMovieDto) {
    return this.movieService.create(movieData);
  }
}
