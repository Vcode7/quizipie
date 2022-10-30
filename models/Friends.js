import mongoose from "mongoose";

const FriendSchema = new mongoose.Schema({
    "UserName":{type:String,required:true},
    "Answer":[],
    "FriendScore":[]
},{timestamps:true});

mongoose.models = {}

export default mongoose.model( "Friend" , FriendSchema )