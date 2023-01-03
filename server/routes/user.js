import express from 'express';
import VerifyToken from '../middleware/VerifyToken.js';

import {getUser, createUser } from '../controllers/users.js'

const router = express.Router();

// Request and response
router.get('/users', VerifyToken, getUser);
router.post('/users', createUser);

export default router;