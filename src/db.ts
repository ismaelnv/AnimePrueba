import { DataSource } from "typeorm"
import {Anime} from './entities/Anime'

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "12345678",
    database: "Anime",
    entities: [Anime],
    logging: true,
    synchronize: true
})