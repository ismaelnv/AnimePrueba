import { BaseEntity, Column, Entity, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { Anime } from "./Anime"; 

@Entity()
export class Chapter extends BaseEntity{ 

    @PrimaryGeneratedColumn()
    idChap: number;
    
    @Column()
    name: String;

    @Column({ 
        default : 0
    })
    views: number;

    @Column({ 
        default: true
    })
    state: boolean;
    
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAd: Date;

    @ManyToOne(()=>Anime,(anime)=>anime.chapters,{cascade: true})
    @JoinColumn({name:"anime_id"})
    anime:Anime;

}