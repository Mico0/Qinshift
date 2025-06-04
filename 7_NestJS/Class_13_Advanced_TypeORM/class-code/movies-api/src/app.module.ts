import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { MoviesModule } from './movies/movies.module';
import { DirectorsModule } from './directors/directors.module';
import { GenresModule } from './genres/genres.module';
import { ActorsModule } from './actors/actors.module';
import { CastMembersModule } from './cast-members/cast-members.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    DatabaseModule,
    MoviesModule,
    DirectorsModule,
    GenresModule,
    ActorsModule,
    CastMembersModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
