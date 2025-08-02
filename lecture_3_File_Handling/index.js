console.log("Learing about file handling in Node.js")

import {readFile, writeFile,appendFile,mkdir} from 'fs/promises';  // fs mean file system


//readFile is used to read the file
const read_file=async(fileName)=>{
    try {
        const data=await readFile(fileName, 'utf-8');
        console.log(data);
    } catch (error) {
        console.error("Error reading file:", error);
    }
}
    // read_file('sample.txt')

//writeFile is used to write the file
const write_file=async(fileName, content)=>{
    try { 
        await writeFile(fileName, content, 'utf-8');
        console.log(`File ${fileName} written successfully.`);
          } catch (error) {
        console.error("Error writing file:", error);
    }
}

// write_file('text.py', 'We are learning Node.js with 5 projects and E-Commerce API with Full Authentication');



// add new content in the adjusting  file

const append_file=async(fileName,content)=>{
      await appendFile(fileName,content)
      console.log("Extra content added sucessfully")
}
// append_file(".text"," this is the extra content")



//create folder 


const create_dir=async(dir)=>{
    await mkdir(dir,{recursive:true})
}
create_dir('src/py')
