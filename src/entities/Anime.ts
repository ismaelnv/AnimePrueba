import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Anime{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: String;

    @Column()
    date: Date;

    @Column()
    state: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAd: Date;

}