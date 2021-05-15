import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Movie, MovieDocument } from './movie.model';
import { Model, Schema as MongooseSchema } from 'mongoose';
import {
  CreateMovieInput,
  ListMovieInput,
  UpdateMovieInput,
} from './movie.inputs';

@Injectable()
export class MovieRepository {
  constructor(
    @InjectModel(Movie.name) private movieModel: Model<MovieDocument>
  ) {}

  async create(payload: CreateMovieInput): Promise<Movie> {
    const createdMovie = new this.movieModel(payload);
    return createdMovie.save();
  }
  async getById(_id: MongooseSchema.Types.ObjectId): Promise<Movie> {
    return this.movieModel.findById(_id).exec();
  }

  async list(filters: ListMovieInput): Promise<Movie[]> {
    return this.movieModel.find({ ...filters }).exec();
  }

  async update(payload: UpdateMovieInput): Promise<Movie> {
    return this.movieModel
      .findByIdAndUpdate(payload._id, payload, { new: true })
      .exec();
  }

  async delete(_id: MongooseSchema.Types.ObjectId): Promise<Movie> {
    return this.movieModel.findByIdAndDelete(_id).exec();
  }
}
