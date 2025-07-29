import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @IsEmail()
    @Column({ nullable: false })
    email: string;

    @Column({ nullable: false })
    password: string;

    @IsString()
    @IsNotEmpty()
    @Column({ length: 100, unique: true })
    firstName: string;

    @IsString()
    @IsNotEmpty()
    @Column({ length: 100 })
    lastName: string;

    @Column({ length: 100, nullable: true })
    company: string;

    @Column({ length: 100, nullable: true })
    purpose: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
} 
