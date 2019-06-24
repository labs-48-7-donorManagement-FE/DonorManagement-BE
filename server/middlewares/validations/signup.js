const Validator = require('validatorjs');

const validateSignUp = (req, res, next) => {
  const user = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
  };

  const rules = {
    firstname: 'required|alpha|min:2',
    lastname: 'required|alpha|min:2',
    email: 'required|email',
    password: 'required|min:6',
  };

  const myValidation = new Validator(user, rules);
  if (myValidation.passes()) {
    return next();
  }
  return res.status(400).json({
    status: 'failed',
    message: 'Please provide valid details'
}); 
};

export default validateSignUp;