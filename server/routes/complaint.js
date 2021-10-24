import express from 'express';

import { getComplaints, addComplaint } from '../controllers/complaint.js';

const router = express.Router();

router.get('/', getComplaints);
router.post('/add', addComplaint);

export default router;