import express from "express";

import { signin, signup, getUsers, getCompanies, getUser } from "../controllers/user.js";

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.get("/users", getUsers);
router.get("/companies", getCompanies);
router.get("/:id", getUser);

export default router;