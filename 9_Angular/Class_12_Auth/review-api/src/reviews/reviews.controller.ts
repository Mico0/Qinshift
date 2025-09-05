import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  ClassSerializerInterceptor,
  UseInterceptors,
  HttpCode,
  Query,
} from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/users/entities/user.entity';
import { AddLikeDislikeDto } from './dto/add-dislike.dto';
import type { GetReviewsQuery } from './reviews.model';

@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(AuthGuard)
@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  create(@Body() createReviewDto: CreateReviewDto, @Req() req: { user: User }) {
    return this.reviewsService.create(req.user.id, createReviewDto);
  }

  @Get()
  findAll(@Query() query: GetReviewsQuery) {
    return this.reviewsService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reviewsService.findOne(+id);
  }

  @HttpCode(200)
  @Post(':id/add-like-dislike')
  addLike(
    @Param('id') id: string,
    @Req() req: { user: User },
    @Body() body: AddLikeDislikeDto,
  ) {
    return this.reviewsService.toggleLikeDislike(req.user.id, +id, body.type);
  }

  @Get(':id/like-dislike-status')
  getLikeDislikeCount(@Param('id') id: string, @Req() req: { user: User }) {
    return this.reviewsService.checkLikeDislike(+id, req.user.id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReviewDto: UpdateReviewDto) {
    return this.reviewsService.update(+id, updateReviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reviewsService.remove(+id);
  }
}
