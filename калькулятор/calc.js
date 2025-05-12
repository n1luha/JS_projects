window.addEventListener('load', main, false);

function main() {
	let a = 0;
	let b = 0;
	let action = "";
	const display = document.getElementById("display");

	// Обработчики цифр
	for (let i = 0; i <= 9; i++) {
		const btn = document.getElementById("number" + i);
		if (btn) {
			btn.onclick = () => {
				if (display.value === "0") {
					display.value = String(i);
				} else {
					display.value += i;
				}
			};
		}
	}

	document.getElementById("plus").onclick = () => {
		a = display.value;
		action = "+";
		display.value = "0";
	};

	document.getElementById("minus").onclick = () => {
		a = display.value;
		action = "-";
		display.value = "0";
	};

	document.getElementById("multiplication").onclick = () => {
		a = display.value;
		action = "*";
		display.value = "0";
	};

	document.getElementById("division").onclick = () => {
		a = display.value;
		action = "/";
		display.value = "0";
	};

	document.getElementById("equal").onclick = () => {
		b = display.value;
		let result;
		switch (action) {
			case "+":
				result = +a + +b;
				break;
			case "-":
				result = +a - +b;
				break;
			case "*":
				result = +a * +b;
				break;
			case "/":
				if (+b === 0) {
					result = "Так нельзя";
				} else {
					result = +a / +b;
				}
				break;
			default:
				result = display.value;
		}
		display.value = result;
	};

	document.getElementById("clearAll").onclick = () => {
		a = 0;
		b = 0;
		display.value = "0";
	};

	document.getElementById("percent").onclick = () => {
		display.value = +display.value / 100;
	};

	document.getElementById("plusMinus").onclick = () => {
		display.value = -display.value;
	};

	document.getElementById("point").onclick = () => {
		if (!display.value.includes(".")) {
			display.value += ".";
		}
	};
}
