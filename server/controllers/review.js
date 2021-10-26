import express from 'express';
import mongoose from 'mongoose';

import Review from '../models/review.js';

const router = express.Router();

export const addReview = async (req, res) => {
    const {from, photo, to, rating, review } = req.body;

    const newReview = new Review({from, photo, to, rating, review});
    try {
        await newReview.save();
        res.status(201).json(newReview);
    } catch (error) {
        res.status(409).json(error.message);
    }
};

export const getReviews = async (req, res) => {
    try {
        const reviews = await Review.find();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(404).json(error.message);
    }
}

export const updateReview = async (req, res) => {
    const { id } = req.params;
    const { from, photo, to, rating, review } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No review with id: ${id}`);

    const updatedReview = { from, photo, to, rating, review, _id: id };

    await Review.findByIdAndUpdate(id, updatedReview, { new: true });

    res.json(updatedReview);
}

export const deleteReview = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No review with id: ${id}`);

    await Review.findByIdAndRemove(id);

    res.json({ message: "Review deleted successfully." });
}