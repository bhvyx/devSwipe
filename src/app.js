const express = require('express');

const app =express();

app.get("/user", (req,res)=>{
    res.send({firstname: "Bhavya"});
})

app.post("/user",(req,res)=> {
    res.send("Data saved to the database succesfully!")
})

app.use("/test",(req,res) => {
    res.send("Hello from the server!");
});


app.listen(3000, ()=>{
    console.log("Server is successfully up and running.")
});