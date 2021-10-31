import express from 'express';
import { getJoboffers, addJoboffer, updateJobOffer, deleteJobOffer} from '../controllers/joboffer.js';

const router = express.Router();

router.get('/', getJoboffers);
router.post('/add', addJoboffer);
router.patch('/:id',updateJobOffer);
router.delete('/:id',deleteJobOffer)
export default router;