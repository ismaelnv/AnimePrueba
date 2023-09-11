//@ts-check
import { Request, Response } from "express";
import { Anime } from "../entities/Anime";
import { log } from "console";
import { json } from "stream/consumers";
import { AppDataSource } from "../db";

export const createAnimes = async (req: Request, res: Response) => {
    try {
        const { name, date, state, description, views} = req.body;
        const anime = new Anime();
        anime.name = name;
        anime.date = date;
        anime.state = state;
        anime.description = description;
        anime.views = views;

        await anime.save();
        return res.status(200).json(anime);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
        console.log(error);
        return res.status(500).json({ message: "Error when adding anime" });
    }

};

export const getAnimes = async (req: Request, res: Response) => {
    try {
        const anime = await Anime.find();

        if (anime == null) {
            return res.status(404).json({ message: "No anime found" });
        }
        return res.json(anime);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ menssage: error.message });
        }
        console.log(error);
        return res.status(500).json({ message: "Error when bringing anime" });
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
            return res.status(500).json({ mensage: error.message });
        }
        console.log(error);
        return res.status(500).json({ mensage: "Error when updating anime" });
    };
};

export const deleteAnimes = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await Anime.delete({ id: parseInt(id) });

        if (result.affected == 0) {
            return res.status(404).json({ message: "Anime not found" });
        }

        return res.status(200).json({ message: "Deleted anime" });

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
        console.log(error);
        return res.status(500).json({ menssage: "Error al eliminar animes" });
    };
};

export const getAnime = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const anime = await Anime.findOneBy({ id: parseInt(id) });
        if (anime == null) {
            return res.status(404).json({ message: "Anime not found" });
        }
        return res.status(200).json(anime);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
        console.log(error);
        return res.status(500).json({ message: "Error when bringing anime" });
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
