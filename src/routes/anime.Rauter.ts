import {Router} from "express";
import {createAnimes,getAnimes,updateAnimes,deleteAnimes, getAnime,getAnimeWithChapters} from "../Controller/anime.Controller";

const router = Router()
router.post("/anime", createAnimes);
router.get("/anime",getAnimes);
router.put("/anime/:id",updateAnimes);
router.delete("/anime/:id",deleteAnimes);
router.get("/anime/:id",getAnime);
router.get("/anime/:id/capitulo",getAnimeWithChapters);
export default router;