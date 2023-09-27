const express=require('express')

const app=express()
const cors=require("cors");
const mongoose=require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const dotenv=require("dotenv");

app.use(express.json());
app.use(bodyParser.json())
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors(
    {
        origin:["http://localhost:3000"],
        methods:["GET","POST","DELETE","PUT"],
        credentials:true
    }
));
//accessing the environment variables
dotenv.config();
const userRoute=require('./routes/User')
const loginRoute=require('./routes/login')

mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser:true,useUnifiedTopology:true
}).then(()=>{
    console.log("DB connected")}
).catch((err)=>
{
    console.log(err)
});

app.use('/login',loginRoute);
app.use('/signup',userRoute);

app.listen(3001,()=>
{
console.log("server is running")
});