import express from 'express';

import { getJoboffers, addJoboffer } from '../controllers/joboffer.js';

const router = express.Router();

router.get('/', getJoboffers);
router.post('/add', addJoboffer);

export default router;