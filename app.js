//jshint esversion:6
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
// const bcrypt = require('bcrypt');
// const saltRounds = 10;

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true}));

mongoose.connect("mongodb://localhost:27017/userDB", { useNewUrlParser: true ,  useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});


const User = mongoose.model("User", userSchema);

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/login", function(req, res) {
    res.render("login");
});

app.get("/register", function(req, res) {
    res.render("register");
});

app.post("/register", function(req, res) {

    // bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    //     const newUser = new User ({
    //         email: req.body.username,
    //         password: hash
    //     });
    //     newUser.save(function(err) {
    //         if(!err) {
    //             console.log("Successfully saved!");
    //             res.render("secrets");
    //         }
    //     });
    // });
});

app.post("/login", function(req, res) {
    // User.findOne({email: req.body.username}, function(err, foundItem) {
    //     if(!err) {
    //         bcrypt.compare(req.body.password, foundItem.password, function(err, result) {
    //             if(result == true)
    //             res.render("secrets");
    //         })
    //     }
    // })
})


app.listen(4000, function() {
    console.log("Server started at port 4000");
})
