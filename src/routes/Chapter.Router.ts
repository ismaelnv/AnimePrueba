import {Router} from "express";
import {createChapter, deleteChapters, getChapters, updateChapters,getChapter} from "../Controller/Chapter.Contreller";

const router = Router();

router.post("/capitulo",createChapter);
router.get("/capitulo",getChapters);
router.put("/capitulo/:id",updateChapters);
router.delete("/capitulo/:id",deleteChapters);
router.get("/capitulo/:id",getChapter);


export default router;