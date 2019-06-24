const Validator = require('validatorjs');

const validateLogin = (req, res, next) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  const rules = {
    email: 'required|email',
    password: 'required|min:6',
  };

  const myValidation = new Validator(user, rules);
  if (myValidation.passes()) {
    return next();
  }
  return res.status(400).json({
      status: 'failed',
      message: 'Please enter valid email and your correct password'
  }); 
};

export default validateLogin;