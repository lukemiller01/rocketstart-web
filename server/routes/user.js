import express from 'express';

import {createUser, resendVerification, resetPassword } from '../controllers/users.js'

const router = express.Router();

// Request and response
router.post('/', createUser);
router.patch('/:id', resendVerification);
router.post('/reset', resetPassword);

export default router;