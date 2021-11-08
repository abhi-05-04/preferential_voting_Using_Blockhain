import mongoose from "mongoose";

const signupSchema = new mongoose.Schema({
    Name: {
        type : String,
        required : true
    },
    adhaarcard: {
        type : String,
        required : true
    }
})

module.exports=mongoose.model('voters',signupSchema);