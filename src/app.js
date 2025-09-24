const express = require('express');

const app =express();

app.use("/test",(req,res) => {
    res.send("Hello from the server!");
});
// test is a route which is optional, now server will only respond when we connect to localhost:port/test
//when test is not there everytime it responds but when test is there it will respond with cannot GET /

app.listen(3000, ()=>{
    console.log("Server is successfully up and running.")
});