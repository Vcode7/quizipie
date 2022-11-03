import User from '../../models/User'
import connectDB from '../../middelwear/dbconnect';
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const handler = async (req, res) => {
  if (req.method === 'POST') {

      let userem = await User.find({ "Email": req.body.email });

      if(!userem[0]){

         res.status(200).json({ login:false , "error" : "email doesnot exsist" })

      }
      else{
        var bytes  = CryptoJS.AES.decrypt(userem[0].Password, process.env.JWT_CODE);
        var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

        if (decryptedData == req.body.password) 
        {
          var token = jwt.sign({user : { "username" : userem[0].UserName , "id": userem[0]._id}}, process.env.JWT_CODE);
          res.status(200).json({ login: true , token })     
        }
        else {
          res.status(200).json({ login:false , "error": 'Invalid password' })
        }
      }
    }

}



export default connectDB(handler)