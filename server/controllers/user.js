import model from '../models';
import { tokenGenerator, comparePassword } from '../helpers/utils';

const { User } = model;

export const signUp = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const userData = {
    firstName,
    lastName,
    email,
    password
  };

  try {
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      return res.status(409).json({
        status: 'failed',
        message: 'User with this email already exist'
      });
    }

    const newUser = await User.create(userData);
    const { id } = newUser;
    const token = tokenGenerator({ id });

    return res.status(200).json({
      status: 'success',
      message: 'User created successfully',
      data: newUser,
      token
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({
        status: 'failed',
        messaege: 'User does not exist'
      });
    }

    const { id } = user;
    const token = tokenGenerator({ id });

    if (user && !comparePassword(user.password, password)) {
      res.status(400).json({
        status: 'failed',
        message: 'Incorrect password'
      });
    } else {
      res.status(200).json({
        status: 'success',
        message: 'User login successful',
        token
      });
    }
  } catch (error) {
    console.log(error);
  }
};
