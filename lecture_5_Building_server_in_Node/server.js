import http from 'http';
console.log("We are building a server in Node.js")
const server=http.createServer((req,res)=>{
    res.end("<h1>Welcome to the Node.js Server</h1>");
});

const port=1000;
server.listen(port,()=>console.log(`Server is running on port ${port}`));
