import express from 'express';

import {getUser, createUser, resendVerification, resetPassword } from '../controllers/users.js'

const router = express.Router();

// Request and response
router.get('/', getUser);
router.post('/', createUser);
router.post('/reset', resetPassword);
router.patch('/:id', resendVerification);

export default router;