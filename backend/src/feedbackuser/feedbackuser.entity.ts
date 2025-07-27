import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { IsString } from 'class-validator';

@Entity({ name: 'feedbackuser' })
export class Feedbackuser {
    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    @Column()
    feedbackUserName: string;

    @Column()
    feedbackUserRole: string;

    @Column()
    feedbackUserDetails: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
} 
