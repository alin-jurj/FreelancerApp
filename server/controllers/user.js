import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import User from '../models/user.js';

dotenv.config();

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser =  await User.findOne({ email });

        if(!existingUser) return res.status(404).json({message: "User doesn't exist"});

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect) return res.status(400).json({message: "Invalid credentials."});

        const token = jwt.sign( {email: existingUser.email, id: existingUser._id}, process.env.JWT_SECRET , {expiresIn: "1h"});
    
        res.status(200).json( {result: existingUser, token});
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong.'});
    }
}

export const signup = async (req, res) => {
    const { name, email, password, description, phone, photo, type } = req.body;

    try {
        const oldUser = await User.findOne({ email });

        if (oldUser) return res.status(400).json({ message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({ email, password: hashedPassword, description, name, phone, photo, type });

        const token = jwt.sign( { email: result.email, id: result._id }, process.env.JWT_SECRET, { expiresIn: "1h" } );

        res.status(201).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }
};

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json(error.message);
    }
}

export const getCompanies = async (req, res) => {
    try {
        const companies = await User.find({type: "company"});
        res.status(200).json(companies);
    } catch (error) {
        res.status(404).json(error.message);
    }
}

export const getFreelancers = async (req, res) => {
    try {
        const freelancers = await User.find({type: "freelancer"});
        res.status(200).json(freelancers);
    } catch (error) {
        res.status(404).json(error.message);
    }
}

export const getUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json(error.message);
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`);

    await User.findByIdAndRemove(id);

    res.json({ message: "User deleted successfully." });
}