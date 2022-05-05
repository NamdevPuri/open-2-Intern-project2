const internModel= require("../Models/internModel")

const createIntern = async function (req, res) {
    try {
        let data = req.body
        let savedData = await internModel.create(data)
        res.status(201).send({ msg: savedData })
    }
    catch (err) {
        console.log("This is the error :", err.message)
        res.status(500).send({ msg: "Error", error: err.message })
    }
}

module.exports= {createIntern}