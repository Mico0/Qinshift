import { IsEnum, IsString } from 'class-validator';

export enum LikeDislike {
  LIKE = 'LIKE',
  DISLIKE = 'DISLIKE',
}

export class AddLikeDislikeDto {
  @IsEnum(LikeDislike)
  type: LikeDislike;
}
