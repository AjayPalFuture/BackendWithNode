import express from "express";
import env from "dotenv";

const app=express();
app.get("/home",(req,res)=>{
    res.json({message:"This is Home Route"});
    console.log("hello")
})
env.config();

const port=process.env.PORT || 4000;
 app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});