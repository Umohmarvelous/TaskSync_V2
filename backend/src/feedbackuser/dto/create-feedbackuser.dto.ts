import { IsString } from "class-validator";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

// @Entity('feedbackuser')
export class CreateFeedbackuserDto {
    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    @Column()
    feedbackUserName: string;

    @Column()
    feedbackUserRole: string;

    @Column({ length: 100, nullable: true })
    feedbackUserDetails: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}