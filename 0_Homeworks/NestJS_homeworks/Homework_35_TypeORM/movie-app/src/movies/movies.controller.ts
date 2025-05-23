import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { MovieFilters } from 'src/interfaces/movieFilters.interface';
import { Genre } from './enums/genre.enum';

@ApiTags('Movies')
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @ApiOperation({ summary: 'Creates a movie entry in the DB' })
  @ApiResponse({
    status: 201,
    description:
      'You get a 201 create response if the movie is created sucessfully',
    schema: {
      example: {
        title: 'Lord of The Rings: The Fellowship of the Ring',
        description:
          'Frodo Baggins, a hobbit of the Shire, inherits the One Ring. He must journey across Middle-earth to destroy it in the fires of Mount Doom.',
        release_year: 2001,
        genre: 'fantasy',
        duration: 178,
        rating: 9,
        poster_url: 'https://example.com/posters/lotr1.jpg',
        id: '55fdecbf-0de9-42bd-baf7-1245a4f2f74a',
        created_at: '2025-05-22T13:53:38.995Z',
        updated_at: '2025-05-22T13:53:38.995Z',
      },
    },
  })
  @Post()
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @ApiOperation({
    summary:
      'Returns all movies from the DB or the movies with the specified filters',
  })
  @ApiResponse({
    status: 200,
    description: 'You get a response of 200 if the request is sucessfull',
    schema: {
      example: [
        {
          id: 'b20429e4-bc9d-4383-8232-0540c57495b4',
          title: 'Lord of The Rings: The Fellowship of the Ring',
          description:
            'Frodo Baggins, a hobbit of the Shire, inherits the One Ring. He must journey across Middle-earth to destroy it in the fires of Mount Doom.',
          release_year: 2001,
          genre: 'fantasy',
          duration: 178,
          rating: 9,
          poster_url: 'https://example.com/posters/lotr1.jpg',
          created_at: '2025-05-22T14:07:18.025Z',
          updated_at: '2025-05-22T14:07:18.025Z',
        },
        {
          id: '8b3285a2-38b6-4dae-83ae-929808347bdb',
          title: 'Inception',
          description:
            "A skilled thief who steals secrets through dream-sharing technology is tasked with planting an idea in a target's subconscious.",
          release_year: 2010,
          genre: 'sci-fi',
          duration: 148,
          rating: 8,
          poster_url: 'https://example.com/posters/inception.jpg',
          created_at: '2025-05-22T14:08:24.391Z',
          updated_at: '2025-05-22T14:08:24.391Z',
        },
        {
          id: '921d9e9e-37cd-4273-a04c-69a54c690aba',
          title: 'The Matrix',
          description:
            'A hacker discovers the reality he knows is a simulation and joins a rebellion against the machines controlling humanity.',
          release_year: 1999,
          genre: 'sci-fi',
          duration: 136,
          rating: 9,
          poster_url: 'https://example.com/posters/matrix.jpg',
          created_at: '2025-05-22T14:08:35.145Z',
          updated_at: '2025-05-22T14:27:07.557Z',
        },
      ],
    },
  })
  @ApiQuery({
    name: 'genre',
    enum: Genre,
    description: 'Genre of the movie',
    required: false,
  })
  @ApiQuery({
    name: 'minRating',
    type: 'number',
    description: 'Movies with a minimum rating of',
    required: false,
  })
  @ApiQuery({
    name: 'maxDuration',
    type: 'number',
    description: 'Movies with a max duration of',
    required: false,
  })
  @ApiQuery({
    name: 'title',
    type: 'string',
    description: 'Search for movies by a word contained in the title',
    required: false,
  })
  @ApiQuery({
    name: 'sortDirection',
    type: 'string',
    description: 'Sort direction for the sort function: asc or desc',
    required: false,
  })
  @ApiQuery({
    name: 'sortBy',
    type: 'string',
    description:
      'By which condition should the movies be sorted: releaseYear, rating, duration',
    required: false,
  })
  @Get()
  async findAll(
    @Query('genre') genre: string,
    @Query('minRating') minRating: string,
    @Query('maxDuration') maxDuration: string,
    @Query('title') title: string,
    @Query('sortDirection') sortDirection: string,
    @Query('sortBy') sortBy: string,
  ) {
    const movieFilters: MovieFilters = {};

    if (genre && Object.values(Genre).includes(genre as Genre)) {
      movieFilters.genre = genre as Genre;
    }

    if (minRating) {
      movieFilters.minRating = !Number.isNaN(Number(minRating))
        ? Number(minRating)
        : null;
    }

    if (maxDuration) {
      movieFilters.maxDuration = !Number.isNaN(Number(maxDuration))
        ? Number(maxDuration)
        : null;
    }

    if (title) {
      movieFilters.title = title;
    }

    if (sortBy) {
      movieFilters.sortBy = sortBy;
    }

    if (sortDirection) {
      movieFilters.sortDirection = sortDirection;
    }
    return this.moviesService.findAll(movieFilters);
  }

  @ApiOperation({ summary: 'Returns a movie by given ID parameter' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'UUID of the movie',
    type: 'string',
  })
  @ApiResponse({
    status: 200,
    description: 'You get a status code of 200 if the movie was found',
    schema: {
      example: {
        id: '921d9e9e-37cd-4273-a04c-69a54c690aba',
        title: 'The Matrix',
        description:
          'A hacker discovers the reality he knows is a simulation and joins a rebellion against the machines controlling humanity.',
        release_year: 1999,
        genre: 'sci-fi',
        duration: 136,
        rating: 9,
        poster_url: 'https://example.com/posters/matrix.jpg',
        created_at: '2025-05-22T14:08:35.145Z',
        updated_at: '2025-05-22T14:27:07.557Z',
      },
    },
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moviesService.findOne(id);
  }

  @HttpCode(204)
  @ApiOperation({
    summary: 'Updates as movie in the DB or one of the attributes of a movie',
  })
  @ApiResponse({
    status: 204,
    description: 'Returns 204 no content if the movie is updated',
  })
  @ApiBody({
    schema: {
      example: {
        title: 'The Matrix - Updated',
      },
    },
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.moviesService.update(id, updateMovieDto);
  }

  @ApiOperation({
    summary: 'Deletes a movie from the DB if a movie is found',
  })
  @ApiResponse({
    status: 204,
    description: 'Returns 204 no content if the movie is deleted',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'UUID of the movie',
    type: 'string',
  })
  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moviesService.remove(id);
  }
}
