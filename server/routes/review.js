import express from 'express';

import { addReview, getReviews, updateReview, deleteReview } from '../controllers/review.js';

const router = express.Router();

router.get('/', getReviews);
router.post('/add', addReview);
router.patch('/:id', updateReview);
router.delete('/:id', deleteReview);

export default router;