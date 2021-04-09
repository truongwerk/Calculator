//Basic math function
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
	if (b == 0) {
		return "ERROR";
	}
	return a / b;
}
console.log(divide(4, 0));

function operate(previousNumber, currentNumber, operator) {
	if (operator === "add") {
		return add(previousNumber, currentNumber);
	} else if (operator === "subtract") {
		return subtract(previousNumber, currentNumber);
	} else if (operator === "multiply") {
		return multiply(previousNumber, currentNumber);
	} else if (operator === "divide") {
		return divide(previousNumber, currentNumber);
	}
}


//Add number
const secondMonitor =document.getElementById('secondMonitor');
const btn1=document.getElementById('button1');
btn1.addEventListener('click')
