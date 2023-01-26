import express from 'express';

import { createCheckout } from '../controllers/stripe.js'

const router = express.Router();

// Request and response
router.post('/', createCheckout);

export default router;