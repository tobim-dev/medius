import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'src/schema.gql',
    }),
    MongooseModule.forRoot('mongodb://localhost/medius'),
    MoviesModule,
  ],
})
export class AppModule {}
