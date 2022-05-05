const { check, validationResult } = require("express-validator/check");

exports.validateCollege = [
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
  check("fullName")
    .trim()
    .not()
    .isEmpty()
    .withMessage("name is a rquired field")
    .not()
    .isNumeric()
    .withMessage("invalid name : numbers not allowed") 
    .isLength({ min: 5, max: 50 })
    .withMessage("fullName must be within 3 to 50 characters"),
  check("logolink")
    .trim()
    .not()
    .isEmpty()
    .withMessage("logolink is a required field")
    .isURL()
    .withMessage("not a valid url"),
  check("isDeleted")
    .trim()
    .isBoolean()
    .withMessage("enter a valid bolean value"),
];

exports.collegeValidationResult = (req, res, next) => {
  const result = validationResult(req).array();
  if (!result.length) return next();

  const error = result[0].msg;
  res.status(400).send({ status: false, msg: error });
};


