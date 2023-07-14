const currentScreen = document.querySelector('.currentScreen');
const previousScreen = document.querySelector('.previousScreen');
let currentNumber = '';
let previousNumber = '';
const operand = document.querySelectorAll('.operand');
const operator = document.querySelectorAll('.operator');
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
erase.forEach((del))

function getOperand(operand){
  if (currentNumber.length <= 8) {
    currentNumber += operand;
  }
}

function getOperator(operator){
  previousNumber = currentNumber + operator;
  currentNumber = '';
}
function erase(){
     
}
