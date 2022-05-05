const { check, validationResult } = require("express-validator/check");


exports.validateIntern = [
  check("name")
    .trim()
    .not()
    .isEmpty()
    .withMessage("name is a rquired field")
    .not()
    .isNumeric()
    .withMessage("invalid name : numbers not allowed")
    .isLength({ min: 4, max: 20 })
    .withMessage("name must be within 5 to 20 characters"),
  check("email")
    .not()
    .isEmpty()
    .withMessage("email is a required field")
    .normalizeEmail()
    .isEmail()
    .withMessage("invalid email"),
  check("mobile")
    .trim()
    .not()
    .isEmpty()
    .withMessage("mobile is a required field")
    .isNumeric()
    .isLength({ min: 10, max: 10 })
    .withMessage("invalid number"),
  check("collegeName")
    .trim()
    .not()
    .isEmpty()
    .withMessage("collegeName is a rquired field")
    .not()
    .isNumeric()
    .withMessage("invalid collegeName : numbers not allowed"),
  
];

exports.internValidationResult = (req, res, next) => {
  const result = validationResult(req).array();
  if (!result.length) return next();

  const error = result[0].msg;
  res.status(400).send({ status: false, msg: error });
};

//name , email , mobile , collegeId , isDeleted
