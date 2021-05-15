import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/createMovie.dto';
import { Movie, MovieDocument } from './movie.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel(Movie.name) private movieModel: Model<MovieDocument>
  ) {}

  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    const createdMovie = new this.movieModel(createMovieDto);
    return createdMovie.save();
  }

  async findAll(): Promise<Movie[]> {
    return this.movieModel.find().exec();
  }
}
