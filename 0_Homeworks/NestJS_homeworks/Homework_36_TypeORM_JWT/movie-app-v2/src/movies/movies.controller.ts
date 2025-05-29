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
  ClassSerializerInterceptor,
  UseGuards,
  UseInterceptors,
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
import { RolesGuard } from 'src/roles/roles.guard';
import { AuthGuard } from 'src/auth/auth.guard';
import { RoleType } from 'src/roles/roles.model';
import { Roles } from 'src/roles/roles.decorator';

@ApiTags('Movies')
@UseGuards(AuthGuard, RolesGuard)
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
        director: {
          id: '82296dd1-e168-4a40-a1dd-87abd94bd2fb',
        },
        actors: [
          {
            id: '16bc9ae8-3049-43fb-b2ba-24bd36cf4ead',
          },
        ],
        id: 'ae905934-1ba0-4381-b7a1-b77bf824d827',
        created_at: '2025-05-29T11:55:10.951Z',
        updated_at: '2025-05-29T11:55:10.951Z',
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
          id: 'ae905934-1ba0-4381-b7a1-b77bf824d827',
          title: 'Lord of The Rings: The Fellowship of the Ring',
          description:
            'Frodo Baggins, a hobbit of the Shire, inherits the One Ring. He must journey across Middle-earth to destroy it in the fires of Mount Doom.',
          release_year: 2001,
          genre: 'fantasy',
          duration: 178,
          rating: 9,
          poster_url: 'https://example.com/posters/lotr1.jpg',
          created_at: '2025-05-29T11:55:10.951Z',
          updated_at: '2025-05-29T11:55:10.951Z',
          director: {
            id: '82296dd1-e168-4a40-a1dd-87abd94bd2fb',
            fullName: 'Peter Jackson',
            birthYear: 1961,
          },
          actors: [
            {
              id: '89e86895-a06d-4d74-a774-fc097d293613',
              fullName: 'Elijah Jordan Wood 2',
              birthYear: 1981,
            },
            {
              id: '16bc9ae8-3049-43fb-b2ba-24bd36cf4ead',
              fullName: 'Elijah Jordan Wood',
              birthYear: 1981,
            },
          ],
        },
        {
          id: 'ae905934-1ba0-4381-b7a1-b77bf824d827',
          title: 'Lord of The Rings: The Fellowship of the Ring',
          description:
            'Frodo Baggins, a hobbit of the Shire, inherits the One Ring. He must journey across Middle-earth to destroy it in the fires of Mount Doom.',
          release_year: 2001,
          genre: 'fantasy',
          duration: 178,
          rating: 9,
          poster_url: 'https://example.com/posters/lotr1.jpg',
          created_at: '2025-05-29T11:55:10.951Z',
          updated_at: '2025-05-29T11:55:10.951Z',
          director: {
            id: '82296dd1-e168-4a40-a1dd-87abd94bd2fb',
            fullName: 'Peter Jackson',
            birthYear: 1961,
          },
          actors: [
            {
              id: '89e86895-a06d-4d74-a774-fc097d293613',
              fullName: 'Elijah Jordan Wood 2',
              birthYear: 1981,
            },
            {
              id: '16bc9ae8-3049-43fb-b2ba-24bd36cf4ead',
              fullName: 'Elijah Jordan Wood',
              birthYear: 1981,
            },
          ],
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
  @Roles(RoleType.ADMIN)
  @Roles(RoleType.USER)
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
      movieFilters.sortBy = sortBy || 'DESC';
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
        id: 'ae905934-1ba0-4381-b7a1-b77bf824d827',
        title: 'Lord of The Rings: The Fellowship of the Ring',
        description:
          'Frodo Baggins, a hobbit of the Shire, inherits the One Ring. He must journey across Middle-earth to destroy it in the fires of Mount Doom.',
        release_year: 2001,
        genre: 'fantasy',
        duration: 178,
        rating: 9,
        poster_url: 'https://example.com/posters/lotr1.jpg',
        created_at: '2025-05-29T11:55:10.951Z',
        updated_at: '2025-05-29T11:55:10.951Z',
        director: {
          id: '82296dd1-e168-4a40-a1dd-87abd94bd2fb',
          fullName: 'Peter Jackson',
          birthYear: 1961,
        },
        actors: [
          {
            id: '89e86895-a06d-4d74-a774-fc097d293613',
            fullName: 'Elijah Jordan Wood 2',
            birthYear: 1981,
          },
          {
            id: '16bc9ae8-3049-43fb-b2ba-24bd36cf4ead',
            fullName: 'Elijah Jordan Wood',
            birthYear: 1981,
          },
        ],
      },
    },
  })
  @Roles(RoleType.ADMIN)
  @Roles(RoleType.USER)
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
  @Roles(RoleType.ADMIN)
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
  @Roles(RoleType.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moviesService.remove(id);
  }
}
