const express = require("express");
const app = express();


app.get("/api/home", (req, res)=>{
    res.status(200).send("Welcome to node project")
});

app.get("/api/user", (req, res)=>{
    res.status(200).send("ALl Users Fetch")
});

app.get("/api/user/1", (req, res)=>{
    res.status(200).send("one User Fetch")
});

app.listen(4040, ()=>console.log("Server started"))