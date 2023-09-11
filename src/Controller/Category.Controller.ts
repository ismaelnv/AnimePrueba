import { Category } from "../entities/Category";
import { Request, Response } from "express";
import { AppDataSource } from "../db";

export const createCategory = async (req: Request, res: Response) => {
    try {
        const { name, state } = req.body;
        const category = new Category();
        category.name = name;
        category.state = state;

        await category.save();
        return res.status(200).json({ message: "The category was added correctly" });
    } catch (error) {
        if(error instanceof Error){
            res.status(500).json({ message: error.message});
        }
        console.log(error);
        res.status(500).json({ message: "Error when creating a category" })
    }


}
