import { Request,Response } from "express";
import { Chapter } from "../entities/Chapter";
import { error } from "console";

export const createChapter = async(req:Request,res:Response)=>{
    try {
        const {name} = req.body;
        const charpter = new Chapter;
        charpter.name = name;
        await charpter.save();
        return res.json(charpter);
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
    };
};

export const getChapters = async(req:Request,res:Response) =>{
    try {
        const charpter = await Chapter.find();
        return res.json(charpter);
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        } 
    }
}

export const updateChapters = async(req:Request,res:Response)=>{
    try {
        const {id} = req.params;
        const charpter = await Chapter.findOneBy({idChap: parseInt(req.params.id )});
        if(!charpter) return res.status(404).json({message: 'Charpter does not exists'});
        await Chapter.update({idChap: parseInt(id)}, req.body);
        return res.status(204);
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
    }
}

export const deleteChapters = async(req:Request,res:Response)=>{
    try {
        const {id} = req.params;
        const result = await  Chapter.delete({idChap: parseInt(id)});

        if(result.affected == 0 ){ 
            return res.status(404).json({mennsage:"Chapter not found"})
        };
        res.status(200).json({message: "Deleted chapter"})

    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
        console.log(error);
        return res.status(500).json({message: "Error deleting chapter"});
    }
}