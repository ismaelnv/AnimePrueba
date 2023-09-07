import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import animeRuter from './routes/anime.Rauter'
import ChapterRouter from './routes/Chapter.Router'

    const app = express();
    app.use(morgan("dev"));
    app.use(cors());
    app.use(express.json());

    app.use(animeRuter,ChapterRouter);

    export default app;