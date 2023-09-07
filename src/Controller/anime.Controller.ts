import {Request,Response} from "express";
import {Anime} from "../entities/Anime";
import { log } from "console";
import { json } from "stream/consumers";

export const createAnimes = async (req:Request,res:Response)=>{
   try {
        const {name,date}= req.body;
        const anime = new Anime();
        anime.name = name;
        anime.date = date;

        await anime.save();
        return res.json(anime);
    
    } catch (error) {
        if (error instanceof Error){
            return res.status(500).json({message: error.message});
    }   }
    
};

export const getAnimes = async(req: Request, res:Response)=>{
   try {
        const anime = await Anime.find();
        return res.json(anime);
    } catch (error) {
        if( error instanceof Error ){
            return res.status(500).json({mensage: error.message});
        }
    }
};

export const updateAnimes = async(req: Request, res:Response)=>{
    try {
        const {id} = req.params;
        const anime = await  Anime.findOneBy({id: parseInt(req.params.id)});
        if(!anime) return res.status(404).json({message: 'Anime does not exists'});
        await Anime.update({id: parseInt(id)}, req.body);
        return res.status(204);
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({mensage: error.message})       
        }
    };
};

export const deleteAnimes = async(req: Request, res:Response)=>{
    try {
        const {id} = req.params;
        const result = await Anime.delete({id: parseInt(id)});
        console.log(result);

        if(result.affected == 0){
            return res.status(404).json({message: "User not found"});
        }

        return res.sendStatus(204);

    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({mensage: error.message});
        }
    };
};

export const getAnime = async(req: Request, res: Response)=>{
   try {
        const {id} = req.params;
        const anime = await Anime.findOneBy({id:parseInt(id)});
        return res.json(anime);
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message:error.message});
        }
    };
};