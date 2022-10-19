import mongoose from "mongoose";

const FriendSchema = new mongoose.Schema({
    "Key":{type:String,required:true},
});

mongoose.models = {}

export default mongoose.model( "FriendQuiz" , FriendSchema )