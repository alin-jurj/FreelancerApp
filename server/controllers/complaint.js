import express from 'express';

import Complaint from '../models/complaint.js';

const router = express.Router();

export const addComplaint = async (req, res) => {
    const {from, against, reason } = req.body;

    const newComplaint = new Complaint({from, against, reason});
    try {
        await newComplaint.save();
        res.status(201).json(newComplaint);
    } catch (error) {
        res.status(409).json(error.message);
    }
};

export const getComplaints = async (req, res) => {
    try {
        const complaints = await Complaint.find();
        res.status(200).json(complaints);
    } catch (error) {
        res.status(404).json(error.message);
    }
}