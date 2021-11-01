import express from 'express';

import { getComplaints, addComplaint, deleteComplaints } from '../controllers/complaint.js';

const router = express.Router();

router.get('/', getComplaints);
router.post('/add', addComplaint);
router.delete('/:id',deleteComplaints)

export default router;