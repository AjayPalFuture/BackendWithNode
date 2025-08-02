import express from 'express';
const app=express();

app.get('/',(req,res)=>{
    res.send(`<h1>You are requested for home Route</h1>`)
})
app.get('/about',(req,res)=>{
    res.send(`<h1>You are requested for About Route</h1>`)
})
app.get('/contact',(req,res)=>{
    res.send('You are requested for Contact Route')
})
const port=3000;
app.listen(port,()=>console.log(`Server is running on port ${port}`))