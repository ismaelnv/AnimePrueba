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
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        console.log(error);
        res.status(500).json({ message: "Error when creating a category" })
    }


}


export const getCategory = async (req: Request, res: Response) => {
    try {

        const categoria = await Category.find();

        if (categoria == null) {
            return res.status(404).json({ message: "No category found" });
        }

        return res.status(200).json(categoria);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }

        console.log(error);
        return res.status(500).json({ message: "Error when bringing the categories" });
    }

}    