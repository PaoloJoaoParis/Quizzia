import express from "express";

import { DifficultyController} from "../controller/index.js";

export const router = express.Router()

router.get("/", DifficultyController.getAllDifficulty);

router.get("/:id", DifficultyController.getDifficultyById);

