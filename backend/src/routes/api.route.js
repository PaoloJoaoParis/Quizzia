import express from "express";

export const router = express.Router()

router.get("/", (req,res)=> {
    res.send(`<h1>page d'acceuil</h1>`)
});

router.get("/api/v1", (req,res)=> {
    res.send(`<h1>Bienvenue dans l'api</h1>`)
})