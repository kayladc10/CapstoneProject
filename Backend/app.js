//Load in all the modules
let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let app = express();

//add middleware
app.use(cors());
//bodyparser is depricated replaced by express.urlencoded
app.use(express.urlencoded({ extended: true }));

//Database URL
let url = "mongodb://localhost:27017/mylib"
//!!!!---- Replace with AWS Database URL ----!!!!

// connect the database 
mongoose.connect(url).then(res=>console.log("connected")).catch(error=>console.log(error));

app.listen(9090, () => console.log("Server running on port number 9090"))