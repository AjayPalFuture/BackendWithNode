import express from "express";
import env from "dotenv";
env.config(); // Load environment variables from .env file
// C - Create   POST(Method)
// R - Read     GET(Method)
// U - Update   PUT/PATCH(Method)
// D - Delete   DELETE(Method)
const app=express();
app.get('/',(req,res)=>{
    res.send(`<h1>Welcome to the CRUD Application</h1>`)
})

const PORT=process.env.PORT || 4000; // Default to 4000 if PORT is not set in .env
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));
