const { check } = require("express-validator");

const checkCondition = [
  check("email")
    .isEmail()
    .withMessage("Provide an valid Email")
    .normalizeEmail(),
  check("password")
    .isLength({ min: 5 })
    .withMessage("Password at least 5 chars"),
];

module.exports = checkCondition;
