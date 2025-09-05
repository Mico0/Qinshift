import { IsNumber, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsNumber()
  reviewId: number;

  @IsString()
  text: string;
}
