let mongoose = require("mongoose");

mongoose.pluralize(null);

let userSchema = mongoose.Schema({
    email:{type:String,require:true, unique:true},
    username:{type:String,require:true, unique:true},
    password:{type:String,require:true, select:false}
})

module.exports = userSchema