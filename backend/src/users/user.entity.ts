import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { IsNotEmpty, IsString } from 'class-validator';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

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

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
} 
