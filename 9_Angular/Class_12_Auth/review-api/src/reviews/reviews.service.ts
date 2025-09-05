import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { EntityManager, Repository, TreeLevelColumn } from 'typeorm';
import { GetReviewsQuery } from './reviews.model';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review) private reviewsRepo: Repository<Review>,
    private manager: EntityManager,
  ) {}

  create(id: string, createReviewDto: CreateReviewDto) {
    return this.reviewsRepo.save({
      ...createReviewDto,
      user: { id },
    });
  }

  async findAll(query: GetReviewsQuery) {
    const reviews = await this.reviewsRepo.find({
      relations: {
        user: true,
      },
      order: {
        id: 'ASC',
      },
      skip: query.firstResult ? Number(query.firstResult) - 1 : 0,
      take: Number(query.maxResults) || 10,
      select: {
        user: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          username: true,
        },
      },
    });

    const totalCount = await this.reviewsRepo.count();

    return {
      reviews,
      totalCount,
    };
  }

  async findOne(id: number) {
    const foundReview = await this.reviewsRepo.findOne({
      where: { id },
      relations: {
        comments: {
          user: true,
        },

        user: true,
      },
      order: {
        comments: {
          added: 'DESC',
        },
      },
      select: {
        user: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          username: true,
        },
        comments: {
          id: true,
          text: true,
          added: true,
          user: {
            username: true,
          },
        },
      },
    });

    delete foundReview.user.refreshTokens;
    delete foundReview.user.email;

    if (!foundReview) throw new NotFoundException('Review not found');

    return foundReview;
  }

  async update(id: number, updateReviewDto: UpdateReviewDto) {
    const foundReview = await this.findOne(id);

    Object.assign(foundReview, updateReviewDto);

    await this.reviewsRepo.save(foundReview);
  }

  async remove(id: number) {
    const foundReview = await this.findOne(id);

    await this.reviewsRepo.remove(foundReview);
  }

  //Add a like
  async toggleLikeDislike(
    userId: string,
    reviewId: number,
    type: 'LIKE' | 'DISLIKE',
  ) {
    const { likeAdded, dislikeAdded } = await this.checkLikeDislike(
      reviewId,
      userId,
    );

    if (!likeAdded && !dislikeAdded) {
      if (type === 'LIKE') {
        await this.manager.query(
          'UPDATE review SET likes = array_append(likes, $1) WHERE review.id = $2',
          [userId, reviewId],
        );
      } else {
        await this.manager.query(
          'UPDATE review SET dislikes = array_append(dislikes, $1) WHERE review.id = $2',
          [userId, reviewId],
        );
      }
    } else if (likeAdded) {
      if (type === 'LIKE') {
        await this.manager.query(
          'UPDATE review SET likes = array_remove(likes, $1) WHERE review.id = $2',
          [userId, reviewId],
        );
      }
      if (type === 'DISLIKE') {
        await this.manager.query(
          'UPDATE review SET likes = array_remove(likes, $1) WHERE review.id = $2',
          [userId, reviewId],
        );

        await this.manager.query(
          'UPDATE review SET dislikes = array_append(dislikes, $1) WHERE review.id = $2',
          [userId, reviewId],
        );
      }
    } else if (dislikeAdded) {
      if (type === 'DISLIKE') {
        await this.manager.query(
          'UPDATE review SET dislikes = array_remove(dislikes, $1) WHERE review.id = $2',
          [userId, reviewId],
        );
      }
      if (type === 'LIKE') {
        await this.manager.query(
          'UPDATE review SET dislikes = array_remove(dislikes, $1) WHERE review.id = $2',
          [userId, reviewId],
        );

        await this.manager.query(
          'UPDATE review SET likes = array_append(likes, $1) WHERE review.id = $2',
          [userId, reviewId],
        );
      }
    }

    return this.checkLikeDislike(reviewId, userId);
  }

  //Check if user has liked review or disliked
  async checkLikeDislike(reviewId: number, userId: string) {
    const isLiked = await this.manager.query(
      'SELECT * FROM review r WHERE r.id = $1 AND $2 = ANY(r.likes)',
      [reviewId, userId],
    );

    const isDisliked = await this.manager.query(
      'SELECT * FROM review r WHERE r.id = $1 AND $2 = ANY(r.dislikes)',
      [reviewId, userId],
    );
    return {
      likeAdded: !!isLiked.length,
      dislikeAdded: !!isDisliked.length,
    };
  }
}
