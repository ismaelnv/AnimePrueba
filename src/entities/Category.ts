import { BaseEntity, Collection, Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Anime } from "./Anime";

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

    @OneToMany(() => Anime,(anime)=>anime.category)
    anime: Anime[];
}