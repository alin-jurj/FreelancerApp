import express from 'express';

import { addProject, getUserProjects, deleteProject } from '../controllers/portofolio.js';

const router = express.Router();

router.post('/', addProject);
router.get('/getUserProjects', getUserProjects);
router.delete('/:id', deleteProject);

export default router;