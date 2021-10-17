import express from 'express';

import { addProject } from '../controllers/portofolio.js';

const router = express.Router();

router.post('/', addProject);

export default router;