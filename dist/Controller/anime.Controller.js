"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAnime = exports.deleteAnimes = exports.updateAnimes = exports.getAnimes = exports.createAnimes = void 0;
const Anime_1 = require("../entities/Anime");
const createAnimes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, date } = req.body;
        const anime = new Anime_1.Anime();
        anime.name = name;
        anime.date = date;
        yield anime.save();
        return res.json(anime);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.createAnimes = createAnimes;
const getAnimes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const anime = yield Anime_1.Anime.find();
        return res.json(anime);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ mensage: error.message });
        }
    }
});
exports.getAnimes = getAnimes;
const updateAnimes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const anime = yield Anime_1.Anime.findOneBy({ id: parseInt(req.params.id) });
        if (!anime)
            return res.status(404).json({ message: 'Anime does not exists' });
        yield Anime_1.Anime.update({ id: parseInt(id) }, req.body);
        return res.status(204);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ mensage: error.message });
        }
    }
    ;
});
exports.updateAnimes = updateAnimes;
const deleteAnimes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield Anime_1.Anime.delete({ id: parseInt(id) });
        console.log(result);
        if (result.affected == 0) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ mensage: error.message });
        }
    }
    ;
});
exports.deleteAnimes = deleteAnimes;
const getAnime = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const anime = yield Anime_1.Anime.findOneBy({ id: parseInt(id) });
        return res.json(anime);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
    ;
});
exports.getAnime = getAnime;
