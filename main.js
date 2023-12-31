const currentScreen = document.querySelector('#currentScreen');
const previousScreen = document.querySelector('#previousScreen');
let currentNumber = '';
let previousNumber = '';
let currentOperator = null;
const operand = document.querySelectorAll('.operand');
const operator = document.querySelectorAll('.operator');
const negative = document.querySelector('#negative');
const decimal = document.querySelector('#decimal')
const equal = document.querySelector('#equal')
const clear = document.querySelector('#clear');
const erase = document.querySelector('#delete');

operand.forEach((operand) => operand.addEventListener("click", function(e){
    getOperand(e.target.textContent)
    currentScreen.textContent = currentNumber;

}))


operator.forEach((operator) => operator.addEventListener("click", function(e){
    getOperator(e.target.textContent)
    previousScreen.textContent = previousNumber + ' ' + currentOperator;
    currentScreen.textContent = currentNumber;
    
}))

clear.addEventListener("click", function(){
        clearScreen();
        previousScreen.textContent = previousNumber;
        currentScreen.textContent = currentNumber;
})

equal.addEventListener("click", function(){
  calculate();
  currentNumber = previousNumber;
  previousScreen.textContent = '';
  currentScreen.textContent = previousNumber;
})

erase.addEventListener("click", function(){
  deletechar();
  currentScreen.textContent = currentNumber;
})

decimal.addEventListener("click", function(){
   adddecimal();
   currentScreen.textContent = currentNumber;
})

negative.addEventListener("click", function(){
    addnegative();
    currentScreen.textContent = currentNumber;
})



function getOperand(operand){
  if (currentNumber.length <= 8) {
    currentNumber += operand;
  }
}

function getOperator(operator){
  currentOperator = operator;
  previousNumber = currentNumber;
  currentNumber = '';
}
function clearScreen(){
  previousNumber = '';
  currentNumber  ='';
  currentOperator = null;
}
function calculate(){
// Convert numbers to floating point before doing calculations
let prevNum = parseFloat(previousNumber);
let currNum = parseFloat(currentNumber)

 if (currentOperator === "+"){
  prevNum += currNum;
 } else if (currentOperator === "-"){
  prevNum -= currNum;
 }
 else if (currentOperator === "x"){
  prevNum *= currNum;
 }
 else if (currentOperator === "÷"){
  if (currNum !== 0) {
    prevNum /= currNum;
  }
  else {
    console.error("Cannot divide by zero!");
    return;
 }
}
 else {
  prevNum %= currNum;
 }
 previousNumber = prevNum.toString();  // Convert result back to string
 console.log(previousNumber);
}
  
function deletechar(){
currentNumber = currentNumber.slice(0, -1);
}

function adddecimal(){
    if (!currentNumber.includes('.')) {
      currentNumber += '.'
    }
}

function addnegative(){
  if (currentNumber.charAt(0) === '-') {
    currentNumber = currentNumber.slice(1);
  } else {
    currentNumber = '-' + currentNumber;
  }
}









