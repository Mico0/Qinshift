import { Review } from 'src/reviews/entities/review.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Review, (review) => review.comments)
  review: Review;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  added: string;
}
