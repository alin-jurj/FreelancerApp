import express from 'express';

import Portofolio from '../models/portofolio.js';

const router = express.Router();

export const addProject = async (req, res) => {
    const {name, username, description, photo, githubLink} = req.body;

    const newProject = new Portofolio({name, username, description, photo, githubLink});

    try {
        await newProject.save();
        res.status(201).json(newProject);
    } catch (error) {
        res.status(409).json(error.message);
    }
}