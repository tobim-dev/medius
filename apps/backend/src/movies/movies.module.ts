import { Module } from '@nestjs/common';
import { MoviesResolver } from './movies.resolver';
import { MoviesService } from './movies.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Movie, MovieModel } from './movie.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Movie.name, schema: MovieModel }]),
  ],
  providers: [MoviesResolver, MoviesService],
})
export class MoviesModule {}
