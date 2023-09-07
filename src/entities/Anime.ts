import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Anime extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: String;

    @Column()
    date: Date;

    @Column({ 
        default: true
    })
    state: boolean;

    @Column({ 
        default: "qwasa"
    })
    description: string

    @Column({ 
        default: 0
    })
    views: number

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAd: Date;

}