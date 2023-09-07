import {Router} from "express";
import {createChapter, getChapters, updateChapters} from "../Controller/Chapter.Contreller";

const router = Router();

router.post("/capitulo",createChapter);
router.get("/capitulo",getChapters);
router.put("/capitulo/:id",updateChapters);


export default router;