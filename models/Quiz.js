
const mongoose = require('mongoose');

const OuizSchema = new mongoose.Schema({
     Catagrey : {type:String, required:true},
     Question : {type:String, required:true , unique:true},
     Options : [
        {
         op : {type:String, required:true},
         correct:{type:Number , required:true}
      },
      {
         op : {type:String, required:true},
         correct:{type:Number , required:true}
      },
      {
         op : {type:String, required:true},
         correct:{type:Number , required:true}
      },
      {
         op : {type:String, required:true},
         correct:{type:Number , required:true}
      },
     ],

}, {timestamps:true});

mongoose.models = {}

export default mongoose.model( "Ouizdata" , OuizSchema )