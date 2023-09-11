//@ts-check
import { Request, Response } from "express";
import { Chapter } from "../entities/Chapter";
import { json } from "stream/consumers";

export const createChapter = async (req: Request, res: Response) => {
    try {
        const { name, views, state, createdAt, anime } = req.body;
        const charpter = new Chapter;
        charpter.name = name;
        charpter.views = views,
            charpter.state = state,
            charpter.createdAt = createdAt,
            charpter.anime = anime;
        await charpter.save();
        return res.status(200).json(charpter);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
        console.log(error);
        return res.status(500).json({ message: "Error when adding chapter" });
    };
};

export const getChapters = async (req: Request, res: Response) => {
    try {
        const charpter = await Chapter.find({ relations: { anime: true } });
        if (charpter == null) {
            return res.status(404).json({ message: "No chapter found" });
        }
        return res.status(200).json(charpter);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
        console.log(error);
        return res.status(500).json({ message: "Error when fetching the chapters" });
    }
};

export const updateChapters = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const charpter = await Chapter.findOneBy({ idChap: parseInt(req.params.id) });
        if (!charpter) return res.status(404).json({ message: 'Charpter does not exists' });
        await Chapter.update({ idChap: parseInt(id) }, req.body);
        return res.status(200).json({ message: "The chapter was successfully updated" });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
        console.log(error);
        return res.status(500).json({ message: "Error when updating the chapter" });
    }
};

export const deleteChapters = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await Chapter.delete({ idChap: parseInt(id) });

        if (result.affected == 0) {
            return res.status(404).json({ mennsage: "Chapter not found" })
        };
        res.status(200).json({ message: "Deleted chapter" })

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
        console.log(error);
        return res.status(500).json({ message: "Error deleting chapter" });
    }
};

export const getChapter = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const chapter = await Chapter.findOneBy({ idChap: parseInt(id) });
        if (chapter == null) {
            return res.status(404).json({ message: "Chapter not found" });
        }
        return res.json(chapter);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
        console.log(error);
        return res.status(500).json({ message: "Error when searching for the chapter" });
    }
};