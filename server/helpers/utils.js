import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10));

export const comparePassword = (hashPwd, password) => bcrypt.compareSync(password, hashPwd);

export const tokenGenerator = (payload, tokenExpiryDate = '1h', secret = 'secret') => {
    const token = jwt.sign(payload, secret, { expiresIn: tokenExpiryDate });
    return token;
  };

export const decodeToken = token => jwt.verify(token, process.env.SECRET);

export const toLowerCaseAndTrim = (inputObject) => {
  const formattedObject = {};
  Object.entries(inputObject).forEach((element) => {
    const key = element[0];
    const value = element[1];
    formattedObject[key] = value.replace(/\s/g, '').toLowerCase();
  });
  return formattedObject;
};