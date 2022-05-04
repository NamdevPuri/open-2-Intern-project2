
const collegeModel= require("../Models/collegeModel")

const createdoc = async function (req, res) {
    try {
        let data = req.body
        console.log(data)
        if ( Object.keys(data).length != 0) {
            let savedData = await collegeModel.create(data)
            res.status(201).send({ msg: savedData })
        }
        else res.status(400).send({ msg: "error"})
    }
    catch (err) {
        console.log("This is the error :", err.message)
        res.status(500).send({ msg: "Error", error: err.message })
    }
}

module.exports= {createdoc}