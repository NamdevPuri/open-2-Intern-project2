const express= require('express');
const router = express.Router();
const collegeController= require("../Controllers/collegeController")
const internController= require("../Controllers/internController")



router.post("/createdoc", collegeController.createdoc)
