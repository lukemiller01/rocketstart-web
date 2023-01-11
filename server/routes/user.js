import express from 'express';

import {getUser, createUser, resendVerification } from '../controllers/users.js'

const router = express.Router();

// Request and response
// router.get('/', VerifyToken, getUser);
router.get('/', getUser);
router.post('/', createUser);
router.patch('/:id', resendVerification);

export default router;