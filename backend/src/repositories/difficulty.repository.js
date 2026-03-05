import {DifficultyModel} from "../models/index.js"


export async function getDifficultyById(id) {
    const difficulty = await Difficulty.findByPk(id)
    if (!difficulty) return null
    return difficulty
}

export async function getAllDifficulty() {
    return await Difficulty.findAll()
}



