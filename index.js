var name = prompt("Enter your Name");

let welcomeEl = document.getElementById("welcome-el");

let greeting = "Welcome! ";

welcomeEl.innerText = greeting + name;

welcomeEl.innerText += " 👋";

var x = prompt("Enter a number");
var y = prompt("Enter another number");
var num1 = parseInt(x);
var num2 = parseInt(y);

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let sumEl = document.getElementById("sum-el");

function add() {
  let result = num1 + num2;
  sumEl.textContent = "Sum: " + result;
}

function sub() {
  let result = num1 - num2;
  sumEl.textContent = "Sub: " + result;
}

function div() {
  let result = num1 / num2;
  sumEl.textContent = "Div: " + result;
}

function mul() {
  let result = num1 * num2;
  sumEl.textContent = "Mul: " + result;
}
