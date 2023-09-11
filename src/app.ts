import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import animeRuter from './routes/anime.Rauter'
import ChapterRouter from './routes/Chapter.Router'
import CategoryRauter from './routes/Category.Rauter'

    const app = express();
    app.use(morgan("dev"));
    app.use(cors());
    app.use(express.json());

    app.use(animeRuter,ChapterRouter,CategoryRauter);

    export default app;