const mongoose=require("mongoose");
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        
    },  
    email:{
        type:String,
        required:true
    },
    password:
    {
        type:String,
        required:true
    }, 
    
    
    
   // please read about enum and how to use it
}
)
const user= new mongoose.model("user",userSchema);
module.exports=user;