
const express = require("express");
const app = express();
const path = require("path");


app.get("/html",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
})
app.get("/Messi",(req,res)=>{
    res.sendFile(path.join(__dirname,"Messi.html"));
})
app.get("/ff",(req,res)=>{
    res.sendFile(path.join(__dirname,"ff.html"));
})

app.listen(4231    ,   ()=>{
    console.log("server is running");
})