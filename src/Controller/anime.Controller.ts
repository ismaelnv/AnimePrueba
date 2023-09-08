import { Request, Response } from "express";
import { Anime } from "../entities/Anime";
import { log } from "console";
import { json } from "stream/consumers";
import { AppDataSource } from "../db";

export const createAnimes = async (req: Request, res: Response) => {
    try {
        const { name, date } = req.body;
        const anime = new Anime();
        anime.name = name;
        anime.date = date;

        await anime.save();
        return res.json(anime);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }

};

export const getAnimes = async (req: Request, res: Response) => {
    try {
        const anime = await Anime.find();
        return res.json(anime);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ mensage: error.message });
        }
    }
};

export const updateAnimes = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const anime = await Anime.findOneBy({ id: parseInt(req.params.id) });
        if (!anime) return res.status(404).json({ message: 'Anime does not exists' });
        await Anime.update({ id: parseInt(id) }, req.body);
        return res.status(200).json({ mensage: "Anime update" });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ mensage: error.message })
        }
    };
};

export const deleteAnimes = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await Anime.delete({ id: parseInt(id) });
        console.log(result);

        if (result.affected == 0) {
            return res.status(404).json({ message: "Anime not found" });
        }

        return res.sendStatus(204);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
        console.log(error);
        return res.status(500).json({ mensage: "Error al eliminar animes" });
    };
};

export const getAnime = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const anime = await Anime.findOneBy({ id: parseInt(id) });
        return res.json(anime);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    };
};

export const getAnimeWithChapters = async (req: Request, res: Response) => {
    try {
        const animeRepository = AppDataSource.getRepository(Anime);
        const animes = await animeRepository.findOne({
            where: { id: parseInt(req.params.id) }, relations: {
                chapters: true,
            }
        });
        if (animes == null) {
            return res.status(404).json({ message: "Anime not found" });
        }

        return res.status(200).json(animes);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
        console.log(error);
        return res.status(500).json({ message: "Error when searching for anime" });
    }
};
