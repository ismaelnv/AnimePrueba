import { DataSource } from "typeorm"
import {Anime} from './entities/Anime'
import { Chapter } from "./entities/Chapter"
import { Category } from "./entities/Category"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "12345678",
    database: "Anime",
    entities: [Anime,Chapter,Category],
    logging: true,
    synchronize: true
})