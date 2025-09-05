import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { Repository } from 'typeorm';
import { GetCommentsQuery } from './comments.model';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment) private commentsRepo: Repository<Comment>,
  ) {}

  create(userId: string, createCommentDto: CreateCommentDto) {
    return this.commentsRepo.save({
      text: createCommentDto.text,
      review: {
        id: createCommentDto.reviewId,
      },
      user: {
        id: userId,
      },
    });
  }

  async findReviewComments(reviewId: number, query: GetCommentsQuery) {
    const [comments, totalCount] = await this.commentsRepo.findAndCount({
      where: {
        review: {
          id: reviewId,
        },
      },
      relations: {
        user: true,
      },
      order: {
        added: 'DESC',
      },
      select: {
        user: {
          username: true,
        },
      },
      take: query.maxResults ? Number(query.maxResults) : 10,
      skip: query.firstResult ? Number(query.firstResult) - 1 : 0,
    });

    return { comments, totalCount };
  }

  findAll() {
    return `This action returns all comments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
