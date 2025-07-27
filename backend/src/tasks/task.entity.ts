import { IsEnum } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  // @IsEnum(["INTERN", "ENGINEER", "ADMIN"], {
  //   message: 'Valid role required'
  // })
  // role: "INTERN" | "ENGINEER" | "ADMIN";

  @Column()
  priority: string;

  @Column()
  @IsEnum(["INTERN", "ENGINEER", "ADMIN"], {
    message: 'Valid role required'
  })
  statusCategory: string;

  @Column()
  assignedTo: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
} 