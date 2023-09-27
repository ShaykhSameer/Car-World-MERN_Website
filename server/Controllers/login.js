const express=require("express");
const user=require("../Models/userData")
const bcrypyt=require("bcryptjs");
const jwt=require("jsonwebtoken");
async function loginValidation(req,res)
{
const {email,password}=req.body; //getting user input
const regUser= await user.findOne({email});
//console.log(regUser);
if(regUser)
{
    const validPass=await bcrypyt.compare(req.body.password,regUser.password);
    if(validPass)
    {
        const token=jwt.sign(
            {user_id:regUser._id,email:regUser.email},process.env.SECRET_TOKEN,
            {
                expiresIn:"1hr"
            }
        );
        res.cookie('token',token)
        res.send({message: "Login successfull",token})
    }
    else{
        res.send({message:"Password is incorrect!"})
    }
}
else{
    res.send({message:"Incorrect password or username!"})
}

//                         // const token=jwt.sign({_id:regUser._id},process.env.SECRET_TOKEN);
//                         // res.header("auth_token",token).send(token);
//
}
module.exports={loginValidation,};