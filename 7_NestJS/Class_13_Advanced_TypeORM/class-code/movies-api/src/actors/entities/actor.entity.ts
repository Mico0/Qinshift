import { CastMember } from 'src/cast-members/entities/cast-member.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('actors')
export class Actor {
  @PrimaryGeneratedColumn({
    name: 'actor_id',
  })
  id: number;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'birth_date' })
  birthDate: string;

  @Column()
  nationality: string;

  @Column()
  biography: string;

  @Column({
    name: 'height_cm',
  })
  height: number;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: string;

  @OneToMany(() => CastMember, (castMember) => castMember.actor)
  castMembers: CastMember[];
}
