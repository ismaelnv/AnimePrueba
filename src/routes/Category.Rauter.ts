import { Router } from "express";
import { createCategory, getCategory } from "../Controller/Category.Controller";

const router = Router();

router.post("/categoria",createCategory);
router.get("/categoria",getCategory);


export default router;