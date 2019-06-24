import express from 'express';
import { signUp, login } from '../controllers/user';
import validateSignUp from '../middlewares/validations/signup';
import validateLogin from '../middlewares/validations/login';

const router = express.Router();

router.post('/auth/signup', validateSignUp, signUp);
router.post('/auth/login', validateLogin, login);

export default router;