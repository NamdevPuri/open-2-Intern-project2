const internModel = require("../Models/internModel");
const collegeModel= require("../Models/collegeModel")

const createIntern = async function (req, res) {
  try {
    let data = req.body;
   

    let numberCheck = await internModel.findOne({ mobile: data.mobile });

    if (numberCheck) 
    return res.status(400).send({ status: false, msg: "Mobile Number Already Exists" });

    let emailCheck = await internModel.findOne({ email: data.email });

    if (emailCheck)
      return res.status(400).send({ status: false, msg: "EmailID Already Exists" });

    let collegeCheck = await collegeModel.findOne({ name: data.collegeName, isDeleted: false,});

   
    if (!collegeCheck) {
      return res.status(400).send({ status: false, message: `${data.collegeName} college doesn't exists.`});
    }
    console.log(data)
    let collegeId = collegeCheck._id;
    data.collegeId = collegeId;

    const internData = await internModel.create(data);
    return res.status(201).send({status: true,message: `Successfully applied for internship at ${data.collegeName}.`, data: internData,});
  } catch (err) {
    console.log("This is the error :", err.message);
    res.status(500).send({ msg: "Error", error: err.message });
  }
};

module.exports = { createIntern };
