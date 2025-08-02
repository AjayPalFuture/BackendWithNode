console.log(" We are learning about modules in Node.js");
//    const {sum,sub,mult,div}=require('./utils'); //not use require syntex  in module only use in commonjs
   import {sum,sub, mult,div} from './utils.js'
   console.log(`Sum of 5 and 3 is: ${sum(5, 3)}`);
   console.log(`Subtraction of 5 and 3 is: ${sub(5, 3)}`);
   console.log(`Multiplication of 5 and 3 is: ${mult(5, 3)}`);
   console.log(`Division of 6 by 3 is: ${div(6, 3)}`);
