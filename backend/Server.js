//jshint esversion :6

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = 4000;
const appRoutes = express.Router();

let User = require("./user.model");
let Internship = require("./internship.model");

app.use(cors());

app.use(bodyParser.json({
    extended:true
}));



appRoutes.route("/").get(function(req,res){
    User.find({},function(err,users){
        if(err){
            console.log(err);
        }else{
            res.json(users);
        }
    });
});

appRoutes.route("/users/:userId").get(function(req,res){
    let id = req.params.userId;
    User.findById(id,function(err,user){
        if(err){
            console.log(err);
        }else{
            res.json(user);
        }
    });
});

appRoutes.route("/register").post(function(req,res){
    let user = new User(req.body);
    user.save()
        .then(user=>{
            res.status(200).json({"user" : "user added successfully!"});
        })
        .catch(err => {
            res.status(400).send("adding new user failed");
        });
});

appRoutes.route("/update/:userId").get(function(req,res){
    let id = req.params.id;
    User.findById(id,function(err,user){
        if(!user){
            res.status(404).send("User not found");
        }
        else{
            res.json(user);
        }
    });
});

appRoutes.route("/update/:userId").post(function(req,res){
    let id = req.params.id;
    User.findById(id,function(err,user){
        if(!user){
            res.status(404).send("User not found");
        }
        else{
            user.userType = req.body.userType;
            user.about.content = req.body.content;
            user.about.github = req.body.github;
            user.about.linkedIn = req.body.linkedIn;
            user.about.facebook = req.body.facebook;
            user.about.skills = req.body.skills;
            user.save().then(user=>{
                res.json("user updated!")
            })
            .catch(err=>{
                res.status(400).send("update not possible");
            });
        }
    });
});

appRoutes.route("/blogs").get(function(req,res){
    User.find({},function(users,err){
        if(err){
            console.log(err);
        }else{
            res.json(users.blogs);
        }
    });
});

appRoutes.route("/blogs/:userId").get(function(req,res){
    let id = req.params.userId;
    User.findById(id,function(user,err){
        if(err){
            console.log(err);
        }else{
            res.json(user.blogs);
        }
    });
});

appRoutes.route("/mentors").get(function(req,res){
    User.find({userType : "mentor"},function(err,mentors){
        if(err){
            console.log(err);
        }else{
            res.json(mentors);
        }
    });
});

appRoutes.route("/experts").get(function(req,res){
    User.find({userType : "expert"},function(err,experts){
        if(err){
            console.log(err);
        }else{
            res.json(experts);
        }
    });
});

appRoutes.route("/internships").get(function(req,res){
    Internship.find({},function(err,internships){
        if(err){
            console.log(err);
        }else{
            res.json(internships);
        }
    });
});

appRoutes.route("/hire").post(function(req,res){
    let internship = new Internship(req.body);
    internship.save()
        .then(user=>{
            res.status(200).json({"internship" : "job added successfully!"});
        })
        .catch(err => {
            res.status(400).send("adding new Job failed");
        });
});

app.use("/elev8",appRoutes);

app.listen(PORT,function(){
    console.log("server started on port "+PORT);
});
mongoose.connect("mongodb+srv://admin-nikhil:test098@cluster0-coazq.mongodb.net/blogDb?retryWrites=true&w=majority",
{useNewUrlParser:true, useUnifiedTopology:true});

const connection = mongoose.connection;
connection.once("open",function(){
    console.log("mongoose connection established");
})

