//require ('dotenv').config({path:'./env'})

import dotnev from "dotenv"
import connectDB from "./db/index.js";

dotnev.config({
    path:'./env'
})

connectDB()


// firsr approach

//import mongoose from "mongooses";
// import express from "express";
//import { DB_NAME } from "./constants.js";
// const app=express()

// (async()=>{

//     try{
//      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//      app.on("error",(error)=>{
//         console.log("Error",error);
//         throw error
//      })

//      app.listen(process.env.PORT,()=>{
//         console.log(`App is listening on port $
//         {process.env.PORT}`);
//      })
//     }catch(error){
//         console.log("ERROR:",error)
//         throw error
//     }
// })()

//2nd aproach







