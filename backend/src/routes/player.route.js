import express from "express";

import { PlayerController } from "../controller/index.js";

export const router = express.Router()

router.get("/", PlayerController.getAllPlayers);
router.post("/", PlayerController.createPlayer);

router.get("/:id", PlayerController.getPlayerById);
router.put("/:id", PlayerController.updatePlayer);
router.patch("/:id", PlayerController.updatePlayer);
router.delete("/:id", PlayerController.deletePlayer);

