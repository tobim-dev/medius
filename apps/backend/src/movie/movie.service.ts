import { Injectable } from '@nestjs/common';
import { Movie, MovieDocument } from './movie.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';
import {
  CreateMovieInput,
  ListMovieInput,
  UpdateMovieInput,
} from './movie.inputs';
import { MovieRepository } from './movie.repository';

@Injectable()
export class MovieService {
  constructor(private readonly movieRepository: MovieRepository) {}

  async create(payload: CreateMovieInput): Promise<Movie> {
    return this.movieRepository.create(payload);
  }
  async getById(_id: MongooseSchema.Types.ObjectId): Promise<Movie> {
    return this.movieRepository.getById(_id);
  }

  async list(filters: ListMovieInput): Promise<Movie[]> {
    return this.movieRepository.list(filters);
  }

  async update(payload: UpdateMovieInput): Promise<Movie> {
    return this.movieRepository.update(payload);
  }

  async delete(_id: MongooseSchema.Types.ObjectId): Promise<Movie> {
    return this.movieRepository.delete(_id);
  }
}
