console.log("routing in Node.js")
import http from 'http';

const server=http.createServer((req,res)=>{
    // console.log(req.url)
    // res.end("<h1>Welcome to the Node.js Routing Server</h1>");
    if(req.url==='/wdm'){
        console.log("Welcome to the WDM page");
        res.end("<h1>Welcome to the WDM page</h1>");
    }
    else if(req.url==='/about'){
        console.log("Welcome to the About page");
        res.end("<h1>Welcome to the About page</h1>");
    }
});
const port =2000;
server.listen(port,()=>console.log(`Server is running on port ${port}`));
