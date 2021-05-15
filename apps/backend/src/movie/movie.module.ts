import { Module } from '@nestjs/common';
import { MoviesResolver } from './movie.resolver';
import { MovieService } from './movie.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Movie, MovieModel } from './movie.model';
import { MovieRepository } from './movie.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Movie.name, schema: MovieModel }]),
  ],
  providers: [MoviesResolver, MovieService, MovieRepository],
})
export class MovieModule {}
