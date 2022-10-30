import mongoose from "mongoose";

const FriendSchema = new mongoose.Schema({
    "Userid":{type:String,required:true},
    "FriendName":{type:String,required:true},
    "FriendScore":{type:Number,required:true}
},{timestamps:true});

mongoose.models = {}

export default mongoose.model( "Score" , FriendSchema )