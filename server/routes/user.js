import express from 'express';
import VerifyToken from '../middleware/VerifyToken.js';

import {getUser, createUser } from '../controllers/users.js'

const router = express.Router();

// Request and response
// router.get('/', VerifyToken, getUser);
router.get('/', getUser);
router.post('/', createUser);

export default router;