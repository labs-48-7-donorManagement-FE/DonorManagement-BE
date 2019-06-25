import express from 'express';
import { signUp, login } from '../controllers/user';
import { createDonor, getAllDonors, updateDonor } from '../controllers/donor';
import validateSignUp from '../middlewares/validations/signup';
import validateLogin from '../middlewares/validations/login';

const router = express.Router();

/* User Routes */
router.post('/auth/signup', validateSignUp, signUp);
router.post('/auth/login', validateLogin, login);

/* Donor Routes */ 
router.post('/donors', createDonor);
router.get('/donors', getAllDonors);
router.patch('/donors/:id', updateDonor);

export default router;