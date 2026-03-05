import ErrorManager from "../errors/api.errors.js"
import {DifficultyRepository, PlayerRepository} from "../repositories/index.js"


export async function getDifficultyById(id){
    const difficulty = await DifficultyRepository.getDifficultyById(id)
    if(!player) {
        throw new ErrorManager.NotFoundError(`Cannot find difficulty with the id : ${id}`)
    }
    return difficulty;
}

export async function getAllDifficulty(){
    return await DifficultyRepository.getAllDifficulty();
}