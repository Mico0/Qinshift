import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

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

  @ApiOperation({ summary: 'Returns all movies from the DB' })
  @ApiResponse({
    status: 200,
    description: 'You get a response of 200 if the request is sucessfull',
    schema: {
      example: [
        {
          id: 'abc123',
          title: 'Inception',
          description:
            'A thief who steals corporate secrets through dream-sharing technology...',
          release_year: 2010,
          genre: 'sci_fi',
          duration: 148,
          rating: 8,
          poster_url: 'https://example.com/posters/inception.jpg',
        },
        {
          id: 'def456',
          title: 'The Godfather',
          description: 'The aging patriarch of an organized crime dynasty...',
          release_year: 1972,
          genre: 'action',
          duration: 175,
          rating: 10,
          poster_url: 'https://example.com/posters/godfather.jpg',
        },
      ],
    },
  })
  @Get()
  findAll() {
    return this.moviesService.findAll();
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
