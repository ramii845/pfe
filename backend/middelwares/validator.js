const { validationResult, check } = require("express-validator");

exports.registerRules = () => [
  check("name", "this field is required").notEmpty(),
  check("firstName", "this field is required").notEmpty(),
  check("matricule", "this field is required").notEmpty(),
  check("matricule", "this field should be at least 8 characters").isLength({
    min: 8, max:14
  }),
  check("email", "this field is required").notEmpty(),
  check("email", "this field should be a valid email").isEmail(),
  check("password", "this field should be at least 6 characters").isLength({
    min: 6,
  }),
];
exports.loginRules = () => [
  check('matricule', 'this field is required').notEmpty(),
  check('passowrd', 'this field is required').notEmpty(),
];

exports.validator = (req, res, next) => {
  const errors = validationResult(req);
  errors.isEmpty() ? next() : res.status(400).json({ errors: errors.array() });
};