import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import animeRuter from './routes/anime.Rauter'

    const app = express();
    app.use(morgan("dev"));
    app.use(cors());
    app.use(express.json());

    app.use(animeRuter);

    export default app;