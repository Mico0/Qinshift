import { Comment } from 'src/comments/entities/comment.entity';
import { User } from 'src/users/entities/user.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  year: number;

  @Column()
  genres: string;

  @Column('real')
  rating: number;

  @Column()
  text: string;

  @Column()
  director: string;

  @Column()
  poster: string;

  @Column('text', {
    array: true,
    default: [],
    nullable: true,
  })
  likes: string[];

  @Column('text', {
    array: true,
    default: [],
    nullable: true,
  })
  dislikes: string[];

  @ManyToOne(() => User)
  user: User;

  @OneToMany(() => Comment, (comment) => comment.review)
  comments: Comment[];
}
