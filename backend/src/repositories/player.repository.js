import Player from "../models/player.model.js"


export async function createPlayer(pseudo, age) {
    if (playerExist(pseudo)) return null
    return await Player.create({pseudo, age})
}

export async function getPlayerById(id) {
    const player = await Player.findByPk(id)
    if (!player) return null
    return player
}

export async function getAllPlayers() {
    return await Player.findAll()
}

export async function deletePlayer(id) {
    const player = await Player.findByPk(id)

    if (!player) return false
    return player.destroy()
}

export async function updatePlayer(id, update = {}) {
    const player = await player.findByPk(id)
    if (!player) return null
    return await player.update(update)
}

export async function playerExist(pseudo, excludedId = null) {
    const player = await Player.findOne({ where : {pseudo} })

    if (!player) return false

    if (excludedId && player.id === exludedId) return false

    return true
}