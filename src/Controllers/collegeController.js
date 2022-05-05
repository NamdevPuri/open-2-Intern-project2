const collegeModel = require("../Models/collegeModel");
const internModel = require("../Models/internModel");

const createCollege = async function (req, res) {
  try {
    let data = req.body;
    let savedData = await collegeModel.create(data);
    res.status(201).send({ msg: savedData });
  } catch (err) {
    console.log("This is the error :", err.message);
    res.status(500).send({ msg: "Error", error: err.message });
  }
};

const getCollege = async function (req, res) {
  try {
    let collegeName = req.query.collegeName;
    const collegeNames = await collegeModel.findOne({ name: collegeName });
    if (!collegeNames) {return res.status(404).send({status: false, message: "College Not Found "});
    }

    const collegeId = collegeNames._id;

    const interns = await internModel.find({ collegeId: collegeId }).select({ _id: 1, email: 1, name: 1, mobile: 1});

    const { name, fullName, logolink } = collegeNames;

    // Final list of College details with students name who applied for internship

    const finalData = {name: name, fullName: fullName, logolink: logolink, interests: interns.length ? interns
        : { message: "No one applied for internship in this college" },
    };
 return res.status(200).send({ status: true, data: finalData });

  } catch (err) {
    console.log("This is the error : ", err.message);
    res.status(500).send({ msg: "Error", error: err.message });
  }
};
module.exports = { createCollege, getCollege };
