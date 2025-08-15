import mongoose, { Schema } from "mongoose";

const userSchema=new Schema({
    name:{type:String,reqired:true},
    username:{type:String,reqired:true,unique:true},
    password:{type:String,reqired:true}
})

const User=mongoose.model("User",userSchema);
export {User};