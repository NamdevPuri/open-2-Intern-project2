const express= require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const route = require('./routes/route.js')


const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://project1:project1%40123@cluster0.cnmul.mongodb.net/group83Database?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() =>
    console.log("MongoDB is connected / Cluster0 / project1db")
  )
  .catch((err) => console.log(err));

  app.use("/", route);

  app.listen(process.env.PORT || 3000, function () {
    console.log("Express app running on port " + (process.env.PORT || 3000));
  });
  