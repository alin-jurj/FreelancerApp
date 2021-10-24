import express from 'express';

import JobOffer from '../models/joboffer.js';

const router = express.Router();

export const addJoboffer = async (req, res) => {
    const {company,companyname, description, name, programmer, status, price} = req.body;

    const newJobOffer = new JobOffer({company,companyname, description, name, programmer, status, price});
    try {
        await newJobOffer.save();
        res.status(201).json(newJobOffer);
    } catch (error) {
        res.status(409).json(error.message);
    }
};

export const getJoboffers = async (req, res) => {
    try {
        const joboffers = await JobOffer.find();
        res.status(200).json(joboffers);
    } catch (error) {
        res.status(404).json(error.message);
    }
}