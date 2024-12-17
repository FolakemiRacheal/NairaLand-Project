
require("dotenv").config()
const express = require("express");
 const mongoose = require("mongoose");
 PORT = process.env.PORT

 const app = express();
 app.use(express.json());


app.use("/api/v1/",router)
dataBaseUri = process.env.dataBaseUri



 mongoose.connect(dataBaseUri).then(()=>{
console.log("successful connection to database")
 }).catch((error)=>{
    console.log(error.message)

 })

 app.listen(PORT,()=>{
    console.log(`server is up and running on ${PORT}` )
 })