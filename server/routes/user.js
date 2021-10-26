import express from "express";

import { signin, signup, getUsers, getCompanies, getUser, getFreelancers, deleteUser } from "../controllers/user.js";

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.get("/users", getUsers);
router.get("/freelancers", getFreelancers);
router.get("/companies", getCompanies);
router.get("/:id", getUser);
router.delete('/:id', deleteUser);

export default router;