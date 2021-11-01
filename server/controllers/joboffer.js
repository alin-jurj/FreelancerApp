import express from 'express';
import mongoose from 'mongoose'
import JobOffer from '../models/joboffer.js';

const router = express.Router();

export const addJoboffer = async (req, res) => {
    const {company,companyname, description, name, programmer, status, percentage, price} = req.body;

    const newJobOffer = new JobOffer({company,companyname, description, name, programmer, status, percentage, price});
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
export const updateJobOffer = async (req, res) => {
    const { id } = req.params;
    const {company,companyname, description, name, programmer, status, percentage, price} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No review with id: ${id}`);

    const updatedJobOffer={company,companyname, description, name, programmer, status, percentage, price, _id: id};


    await JobOffer.findByIdAndUpdate(id, updatedJobOffer, { new: true });

    res.json(updatedJobOffer);
}
export const deleteJobOffer = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No JobOffer with id: ${id}`);

    await JobOffer.findByIdAndRemove(id);

    res.json({ message: "JobOffer deleted successfully." });
}