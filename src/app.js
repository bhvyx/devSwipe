const express = require('express')
const connectDB = require("./config/database")
const app =express();

connectDB()
.then(() => {
    console.log("Database connection successful.");
    app.listen(7777, ()=>{
    console.log("Server is successfully up and running.")
    });
})
.catch(err => {
    console.error("Database cannot be connected.")
})
