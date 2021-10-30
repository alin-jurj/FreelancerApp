import express from 'express';
import mongoose from 'mongoose';

import CreditCard from '../models/CreditCard.js';

const router = express.Router();

export const addCreditCard = async (req, res) => {
    const {name, bank, username,IBAN} = req.body;

    const newCreditCard = new CreditCard({name, bank, username, IBAN});

    try {
        await newCreditCard.save();
        res.status(201).json(newCreditCard);
    } catch (error) {
        res.status(409).json(error.message);
    }
}

export const getUserCreditCards = async (req, res) => {
    try {
        const CreditCards = await CreditCard.find();
        res.status(200).json(CreditCards);
    } catch (error) {
        res.status(404).json(error.message);
    }
}

export const deleteCreditCard = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No credit card with id: ${id}`);

    await CreditCard.findByIdAndRemove(id);

    res.json({ message: "Credit card deleted successfully." });
}