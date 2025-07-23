import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { IsNotEmpty, IsString } from 'class-validator';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    @IsNotEmpty()
    @Column({ length: 100 })
    firstName: string;

    @IsString()
    @IsNotEmpty()
    @Column({ length: 100 })
    lastName: string;

    @Column({ length: 100, nullable: true })
    company: string;

    @Column({ length: 100, nullable: true })
    purpose: string;

    @Column({ length: 100 })
    feedbackUserName: string;

    @Column({ length: 100 })
    feedbackUserRole: string;

    @Column({ length: 100 })
    feedbackUserDetails: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
} 
