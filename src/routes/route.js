const express= require('express');
const router = express.Router();
const collegeController= require("../Controllers/collegeController")
const internController= require("../Controllers/internController")

const {validateCollege , collegeValidationResult}  = require ('../middlewares/validation/college')
const {validateIntern , internValidationResult}  = require ('../middlewares/validation/intern')



router.post("/functionup/colleges",validateCollege, collegeValidationResult, collegeController.createdoc);
router.post("/functionup/interns",validateIntern, internValidationResult, internController.createIntern);

module.exports = router;
