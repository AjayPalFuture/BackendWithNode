console.log("path module in Node.js");
// import { log } from 'console';
import path from 'path';

//join two  or more file
const fullPath=path.join('/path','index.js','file.java');
console.log(`file Path: ${fullPath}`);
  

const absolutePath=path.resolve();
console.log(`Absolute Path: ${absolutePath}`);
 
// extension name 
const extname=path.extname('resume.pdf');
console.log(`Extension Name: ${extname}`);
if(extname==='.pdf'){
    console.log("This is a PDF file");
} else {
    console.log("This is not a PDF file");
}