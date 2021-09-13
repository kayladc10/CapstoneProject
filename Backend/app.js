//Load in all the modules
let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let app = express();

//add middleware
app.use(cors());
//bodyparser is depricated replaced by express.urlencoded
app.use(express.urlencoded({ extended: true }));


app.listen(9090, () => console.log("Server running on port number 9090"))