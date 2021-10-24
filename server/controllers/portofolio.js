import express from 'express';
import mongoose from 'mongoose';

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

export const getUserProjects = async (req, res) => {
    try {
        const projects = await Portofolio.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(404).json(error.message);
    }
}

export const deleteProject = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No project with id: ${id}`);

    await Portofolio.findByIdAndRemove(id);

    res.json({ message: "Project deleted successfully." });
}