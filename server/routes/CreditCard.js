import express from 'express';

import { addCreditCard, getUserCreditCards, deleteCreditCard } from '../controllers/CreditCard.js';

const router = express.Router();

router.post('/', addCreditCard);
router.get('/', getUserCreditCards);
router.delete('/:id', deleteCreditCard);

export default router;
