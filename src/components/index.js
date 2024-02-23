const express = require('express');
const app = new express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
app.use(cors());
app.use(bodyParser.json());
let Student = require('./student.model');

mongoose.connect("mongodb+srv://dilnadas76:7HiO80OKZMVp7j10@cluster0.6f7nez8.mongodb.net/studentbase?retryWrites=true&w=majority&appName=Cluster0");
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connection established sucessfully");
})
app.get("/", (req, res) => {
    console.log("Request received");
    res.json("HelloWorld");
});
app.get("/hi", (req, res) => {
    console.log(" hi Request received");
    res.json("Welcome to nodemon");
});
app.get("/people", (req, res) => {
    console.log(" People request received");
    res.json([{ Name: "john", role: "student" },
    { name: "Dilna", role: "student" }]);
});
app.get("/students", async (req, res) => {
    console.log(" Student request received");
    let data= await Student.find().catch(err=>{
        res.json("Error loading data");
    });
    res.json(data);
    // res.json([{ name: "John", dept: "it", age: 23 },
    // { name: "Maya", dept: "cs", age: 23 }]);
});
//To get single student data
app.get('/student/:id',async(req,res)=>{
let id=req.params.id;
let data= await Student.findById(id).catch(err=>{
    res.json("Error finding Student");
});
if(!data){
    res.json("Not Found");
}
else{
    res.json(data);
}
});
app.post("/students", (req, res) => {
    console.log(req.body);
    let student = new Student(req.body);
    student.save().then(() => {
        res.json("Saved Sucessfully");
    }).catch(err => {
        res.json("Error: " + err);
    });
});
//To delete a selected student from database.
app.delete('/student/:id',async(req,res)=>{
    let id=req.params.id;
    await Student.findByIdAndDelete(id)
    .then(()=>{
        res.json('Data Removed Sucessfully')
    })
    .catch(err=>{
        res.json("Failed to delete");
    });
});
app.listen("8080", () => {
    console.log("Started server on 8080");
});