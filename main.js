const numbers = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');
const screen = document.querySelector('#screen');
const decimal = document.querySelector('.decimal');

numbers.forEach(btn => btn.addEventListener('click', getInput));
operators.forEach(btn => btn.addEventListener('click', getArg));
decimal.addEventListener('click', checkFloat);
equals.addEventListener('click', solve);
clear.addEventListener('click', reset);

const equation = {
  a: 0,
  b: 0,
  result: 0,
  operator: ''
}


function getInput(e) {
  let input = String(e.target.id);
  updateScreen(input);
}

function updateScreen(input) {
  let val = parseFloat(screen.textContent);
  val == equation.a || val == equation.result ? screen.textContent = input
    : val.length > 5 ? null
      : screen.textContent = `${val}${input}`;
}

function getArg(e) {

  if (equation.operator != '' || equation.operator == e.target.id) {
    solve();
  }

  equation.a = parseInt(screen.textContent);
  equation.operator = e.target.id;

}

function solve() {

  equation.b == 0 ? equation.b = parseInt(screen.textContent)
    : equation.a = parseInt(screen.textContent);

  equation.result = operate(equation.operator, equation.a, equation.b);
  screen.textContent = equation.result;

  clearMem();
}

function reset() {
  clearScreen();
  clearMem();
}

function clearScreen() {
  screen.textContent = '0';
}

function clearMem() {
  equation.a = 0;
  equation.b = 0;
  equation.result = 0;
  equation.operator = '';
}

function checkFloat() {
  // If '.' is present in screen text content disable '.'
}


// Operations
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  return operator === '+' ? add(a, b)
    : operator === '-' ? subtract(a, b)
      : operator === '*' ? multiply(a, b)
        : operator === '/' ? divide(a, b)
          : b;
}