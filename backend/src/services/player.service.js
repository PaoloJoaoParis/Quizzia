import ErrorManager from "../errors/api.errors.js"
import {PlayerRepository} from "../repositories/index.js"

export async function getPlayerById(id){
    const player = await PlayerRepository.getPlayerById(id)
    if (!player) {
        throw new ErrorManager.NotFoundError(`Cannot find player with the id : ${id}`);
    }
    return player;
}

export async function getAllPlayers(){
    return await PlayerRepository.getAllPlayers();
}


export async function validatePlayer({pseudo,age}, excludeId = null){
    if (pseudo !== undefined) {
        if (!pseudo || pseudo.length < 3) {
            throw new ErrorManager.ValidatorError(`The pseudo must contain at least 3 caracter`);
        }
        if (await PlayerRepository.playerExist(pseudo, excludeId)){
            throw new ErrorManager.ConflictError(`This pseudo already exist : ${pseudo}`);
        }
    }
    if (!age) {
        throw new ErrorManager.ValidatorError(`The age must be define`);
    }
    if (!excludeId) {
        if (!pseudo) throw new ErrorManager.ValidatorError(`The pseudo must contain at least 3 caracter`);
        if (!age) throw new ErrorManager.ValidatorError(`The age must be define`);
    }
    return true
}

export async function createPlayer ({pseudo,age}){
    await validatePlayer({pseudo,age})

    return await PlayerRepository.createPlayer({pseudo,age});
}

export async function updatePlayer(id, {pseudo, age}){
    await getPlayerById(id);
    await validatePlayer({pseudo, age}, id);

    const update = {};
    if (pseudo) update.pseudo = pseudo;
    if (age) update.age = age;

    return await PlayerRepository.updatePlayer(id, update);
}

export async function deletePlayer(id) {
    const player = await getPlayerById(id)

    return await PlayerRepository.deletePlayer(id);
}