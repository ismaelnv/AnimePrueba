import {Router} from "express";
import {createChapter, deleteChapters, getChapters, updateChapters} from "../Controller/Chapter.Contreller";

const router = Router();

router.post("/capitulo",createChapter);
router.get("/capitulo",getChapters);
router.put("/capitulo/:id",updateChapters);
router.delete("/capitulo/:id",deleteChapters);


export default router;