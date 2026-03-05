import { PlayerService } from "../services/index.js";

export async function getAllPlayers (req,res,next) {
    try{
        const players = await PlayerService.getAllPlayers();
        res.json(players)
    }catch(error){
        next(error)
    }
}

export async function getPlayerById(req,res,next){
    try{
        const player = await PlayerService.getPlayerById(req.params.id);
        res.json(player)
    }catch(error){
        next(error)
    }
}

export async function createPlayer(req,res,next){
    try{
        const player = await PlayerService.createPlayer(req.body);
        res.status(201).json(player)
    }catch(error){
        next(error)
    }
}

export async function updatePlayer(req,res,next){
    try{
        const player = await PlayerService.updatePlayer(req.params.id, req.body);
        res.json(player)
    }catch(error){
        next(error)
    }
}

export async function deletePlayer(req,res,next){
    try{
        const player = await PlayerService.deletePlayer(req.params.id);
        res.json(player)
    }catch(error){
        next(error)
    }
}
