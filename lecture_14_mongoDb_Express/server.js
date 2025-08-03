import express from 'express';
import mongoose from 'mongoose';
import env from 'dotenv';
env.config(); // Load environment variables from .env file
const app=express();
const mongourl=process.env.mongoDbUrl;
const Port=process.env.PORT || 1000; // Default to 1000 if PORT is not set in .env
const mongoDbName=process.env.MONGO_DB_NAME || "NodeJS MongoDB"; // Default to "NodeJS MongoDB" if MONGO_DB_NAME is not set
mongoose.connect(mongourl,{
    dbName: mongoDbName,
}).then(() => {
    console.log('Connected to MongoDB successfully');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);   
})
const PORT=Port || 1000; // Default to 1000 if PORT is not set in .env

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));

app.get('/',(req,res)=>{
    res.send(`<h1>Welcome to the MongoDB Express Server</h1>`);
});