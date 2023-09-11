import { Router } from "express";
import { createCategory } from "../Controller/Category.Controller";

const router = Router();

router.post("/categoria",createCategory);


export default router;