const numberButtons = document.querySelectorAll("[data-num]");
const result = document.querySelector(".result");
const clearButton = document.querySelector(".clear");
const allClearButton = document.querySelector(".ac");
const pendOperation = document.querySelector(".operation");
const operationButtons = document.querySelectorAll(".op");
const equalButton = document.querySelector(".equals");
const inputWidth = document.querySelector(".input-screen").offsetWidth;
console.log(inputWidth);


let operation = "";
let prevOperand = "";
let currentOperand = "";

const appendNumber = (number)=>{
   if (number === '.' && currentOperand.includes('.')) return;
   currentOperand = currentOperand.toString() + number.toString();
   updateDisplay();   
}

equalButton.addEventListener("click",function(){
   
})

const chooseOperation = (e) => {
   if(currentOperand === "")return;
   if(prevOperand !== ""){
       compute();
   }
   operation = e.target.innerHTML;
   prevOperand = currentOperand;
   currentOperand = "";
   updateDisplay();
}

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

 const getDisplayNumber = (number) => {
     const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
 }

 const updateDisplay = (prev=prevOperand, curr = currentOperand) => {
    result.innerText = getDisplayNumber(curr);
    if (operation != null) {
      pendOperation.innerText =
        `${getDisplayNumber(prev)} ${operation}`
    } else {
      pendOperation.innerText = ''
    }
  }

 const compute = ()=>{
     let prev =  parseFloat(prevOperand);
     let curr =  parseFloat(currentOperand);
     let computation = 0;
     switch (operation) {
         case "+":
             computation = add(prev, curr);
             break;
         case "-":
             computation = sub(prev,curr);
             break;
         case "*":
             computation = mul(prev, curr);
             break;
         case "/":
             computation = div(prev,curr);
             break;     
         default:return;
     }
     currentOperand = computation;
     prevOperand = "";
     operation = "";
     updateDisplay();
 }

 numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        appendNumber(button.innerText);
    });
 });

 clearButton.addEventListener("click", function(){
   currentOperand = currentOperand.toString().slice(0, -1);
   updateDisplay();  
 })

 allClearButton.addEventListener("click", function(){
     prevOperand = "";
     currentOperand = "";
     updateDisplay();
 })

 operationButtons.forEach((ops) => {
    ops.addEventListener("click", chooseOperation);
 });

 equalButton.addEventListener("click", () => {
     compute();
 })