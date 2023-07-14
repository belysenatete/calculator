const currentScreen = document.querySelector('.currentScreen');
const previousScreen = document.querySelector('.previousScreen');
let currentNumber = '';
let previousNumber = '';
const operand = document.querySelectorAll('.operand');
const operator = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal')
const clear = document.querySelector('.clear');
const erase = document.querySelector('.delete');

operand.forEach((operand) => operand.addEventListener("click", function(e){
    getOperand(e.target.textContent)
    currentScreen.innerHTML = currentNumber;

}))
operator.forEach((operator) => operator.addEventListener("click", function(e){
    getOperator(e.target.textContent)
    previousScreen.innerHTML = previousNumber;
    currentScreen.innerHTML = currentNumber;
    
}))
clear.addEventListener("click", function(e){
        clearScreen(e.target.textContent);
        previousScreen.innerHTML = previousNumber;
        currentScreen.innerHTML = currentNumber;
})
equal.addEventListener("click", function(){
  calculate();
})


function getOperand(operand){
  if (currentNumber.length <= 8) {
    currentNumber += operand;
  }
}

function getOperator(operator){
  previousNumber = currentNumber + operator;
  currentNumber = '';
}
function clearScreen(){
  previousNumber = '';
  currentNumber  ='';
}
function calculate(){
   currentNumber = Number(currentNumber)
   previousNumber = Number(previousNumber)
  
   if (operator === "+"){
    previousNumber += currentNumber;
   } else if (operator === "-"){
    previousNumber -= currentNumber;
   }
   else if (operator === "x"){
    previousNumber *= currentNumber;
   }
   else if (operator === "÷"){
    previousNumber /= currentNumber;
   }
   else{
    previousNumber %= currentNumber;
   }
   console.log(previousNumber);
}
