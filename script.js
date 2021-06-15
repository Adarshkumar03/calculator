const add = (num1, num2)=>{
   return num1+num2;
}

const sub = (num1, num2)=>{
    return num1-num2;
 }

 const mul = (num1, num2)=>{
    return num1*num2;
 } 
 const div = (num1, num2)=>{
    return num1/num2;
 }

 const operator = (operator, num1,num2)=>{
     switch (operator) {
         case "+":
             console.log(add(num1,num2));
             break;
         case "-":
             console.log(sub(num1,num2));
             break;
         case "*":
             console.log(mul(num1,num2));
             break;
         case "/":
             console.log(div(num1,num2));
             break;     
         default:console.log("wrong input");
     }
 }