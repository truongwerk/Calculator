//Basic math function
function add(a, b) {
	num = a + b;
	return Math.round(num * 100000) / 100000;
}
function subtract(a, b) {
	num = a - b;
	return Math.round(num * 100000) / 100000;
}
function multiply(a, b) {
	num = a * b;
	return Math.round(num * 100000) / 100000;
}
function divide(a, b) {
	if (b == 0) {
		return "Can't Divide By Zero!!";
	}
	num = a / b;
	return Math.round(num * 100000) / 100000;
}
console.log(divide(4, 0));

function operate(previousNumber, currentNumber, operator) {
	previousNumber = Number(previousNumber);
	currentNumber = Number(currentNumber);
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

//Input number, dot, +/- , %
let input = "";
const secondMonitor = document.getElementById("secondMonitor");
const buttonNumber = document.querySelectorAll(".buttonNumber");
buttonNumber.forEach((button) => {
	button.addEventListener("click", function () {
		if (
			tempResult == "Can't Divide By Zero!!" ||
			result == "Can't Divide By Zero!!"
		) {
			return;
		}
		if (input == "0") {
			input = "";
		}
		if (button.id == "button0") {
			input = input + "0";
		}
		if (button.id == "button1") {
			input = input + "1";
		}
		if (button.id == "button2") {
			input = input + "2";
		}
		if (button.id == "button3") {
			input = input + "3";
		}
		if (button.id == "button4") {
			input = input + "4";
		}
		if (button.id == "button5") {
			input = input + "5";
		}
		if (button.id == "button6") {
			input = input + "6";
		}
		if (button.id == "button7") {
			input = input + "7";
		}
		if (button.id == "button8") {
			input = input + "8";
		}
		if (button.id == "button9") {
			input = input + "9";
		}
		secondMonitor.textContent = `${input}`;
		currentInputNonNumber = false;
	});
});

let currentNumberHasDecimal = false;
const buttonDot = document.querySelector("#buttonDot");
buttonDot.addEventListener("click", function () {
	if (input.indexOf(".") == -1) {
		if (input === "") {
			input = "0.";
		} else {
			input = input + ".";
		}
		currentNumberHasDecimal = true;
		secondMonitor.textContent = `${input}`;
	}
});

const buttonOpposite = document.querySelector("#buttonOpposite");
buttonOpposite.addEventListener("click", function () {
	if (currentInputNonNumber == false) {
		let opposite = Number(input) * -1;
		input = `${opposite}`;
		secondMonitor.textContent = `${input}`;
	}
});

const buttonPercent = document.querySelector("#buttonPercent");
buttonPercent.addEventListener("click", function () {
	if (currentInputNonNumber == false && Number(input) > 0.0001) {
		let percent = Number(input) / 100;
		input = `${percent}`;
		secondMonitor.textContent = `${input}`;
	}
});

//Input a operation and operations
const firstMonitor = document.getElementById("firstMonitor");
let currentInputNonNumber = false;
let tempResult = null;
let currentOperator = "";
const buttonOperator = document.querySelectorAll(".buttonOperator");
buttonOperator.forEach((operator) => {
	operator.addEventListener("click", function () {
		if (currentInputNonNumber == false) {
			if (tempResult === null) {
				if (input === "") {
					tempResult = 0;
				} else {
					tempResult = input;
				}
			} else if (tempResult !== null && input != "") {
				if (equalRun == true) {
					tempResult = result;
				} else {
					tempResult = operate(tempResult, input, currentOperator);
					currentOperator = "";
				}
			}
		}
		if (operator.id == "buttonAdd") {
			currentOperator = "add";
			firstMonitor.textContent = `${tempResult}+`;
		}
		if (operator.id == "buttonSubtract") {
			currentOperator = "subtract";
			firstMonitor.textContent = `${tempResult}-`;
		}
		if (operator.id == "buttonMultiply") {
			currentOperator = "multiply";
			firstMonitor.textContent = `${tempResult}*`;
		}
		if (operator.id == "buttonDivide") {
			currentOperator = "divide";
			firstMonitor.textContent = `${tempResult}/`;
		}
		equalRun = false;
		currentInputNonNumber = true;
		input = "";
		secondMonitor.textContent = ".";
	});
});

//Equal function
let result = 0;
let equalRun = false;
const buttonEqual = document.getElementById("buttonEqual");
buttonEqual.addEventListener("click", function () {
	if (currentOperator != "" && input != "") {
		result = operate(tempResult, input, currentOperator);
		input = "";
		currentOperator = "";
		equalRun = true;
		secondMonitor.textContent = `${result}`;
	}
});

//clear function
const buttonClear = document.querySelector("#buttonClear");
buttonClear.addEventListener("click", function () {
	input = "";
	currentInputNonNumber = false;
	tempResult = null;
	currentOperator = "";
	result = 0;
	equalRun = false;
	firstMonitor.textContent = "0";
	secondMonitor.textContent = "0";
});

//backSpace function
const buttonBackspace = document.querySelector("#buttonBackspace");
buttonBackspace.addEventListener("click", function () {
	if (currentInputNonNumber == false) {
		input = input.replace(input[input.length - 1], "");
		if (input == "-") {
			input = "";
		}
		if (input == "") {
			secondMonitor.textContent = `.`;
			return;
		} else {
			secondMonitor.textContent = `${input}`;
		}
	}
});

const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
	btn.addEventListener("click", function () {
		btn.classList.add("clicking");
		console.log(btn.propertyName);
	});
});
buttons.forEach((btn) =>
	btn.addEventListener("transitionend", removeTransition)
);

function removeTransition(e) {
	if (e.propertyName !== "box-shadow") return;
	e.target.classList.remove("clicking");
}
