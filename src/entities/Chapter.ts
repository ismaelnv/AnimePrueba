import { BaseEntity, Column, Entity, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn } from "typeorm";

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

}