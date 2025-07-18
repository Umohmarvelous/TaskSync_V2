import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
  statusCategory: string;

  @Column()
  assignedTo: string;

} 