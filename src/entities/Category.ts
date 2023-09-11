import { BaseEntity, Collection, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Category extends BaseEntity{ 
    
    @PrimaryGeneratedColumn()
    idCat: number;

    @Column()
    name: string;

    @Column({ 
        default: true
    })
    state: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAd: Date;
}