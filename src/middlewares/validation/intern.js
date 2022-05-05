const { check, validationResult } = require("express-validator/check");
const mongoose = require("mongoose");
ObjectId = mongoose.Types.ObjectId;

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
    .withMessage("email is a required field")
    .isNumeric()
    .isLength({ min: 10, max: 10 })
    .withMessage("invalid number"),
  check("collegeId")
    .trim()
    .not()
    .isEmpty()
    .withMessage("email is a required field")
    .custom((value) => {
      if (!ObjectId.isValid(value)) throw new Error("invalid objectId");
      return true;
    }),
  check("isDeleted")
    .trim()
    .isBoolean()
    .withMessage("enter a valid bolean value"),
];

exports.internValidationResult = (req, res, next) => {
  const result = validationResult(req).array();
  if (!result.length) return next();

  const error = result[0].msg;
  res.status(400).send({ status: false, msg: error });
};

//name , email , mobile , collegeId , isDeleted
