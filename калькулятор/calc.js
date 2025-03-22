window.addEventListener('load', main, false);
function main() {
	let a = 0;
	let b = 0;
	let action = "";

	number0.onclick = () => {
		if (display.value == "0")
		{
			display.value = 0;
		}
		else
		{
			display.value += 0;
		}
	}

	number1.onclick = () => {
		if (display.value == "0")
		{
			display.value = 1;
		}
		else
		{
			display.value += 1;
		}
	}

	number2.onclick = () => {
		if (display.value == "0")
		{
			display.value = 2;
		}
		else
		{
			display.value += 2;
		}
	}

	number3.onclick = () => {
		if (display.value == "0")
		{
			display.value = 3;
		}
		else
		{
			display.value += 3;
		}
	}

	number4.onclick = () => {
		if (display.value == "0")
		{
			display.value = 4;
		}
		else
		{
			display.value += 4;
		}
	}

	number5.onclick = () => {
		if (display.value == "0")
		{
			display.value = 5;
		}
		else
		{
			display.value += 5;
		}
	}

	number6.onclick = () => {
		if (display.value == "0")
		{
			display.value = 6;
		}
		else
		{
			display.value += 6;
		}
	}

	number7.onclick = () => {
		if (display.value == "0")
		{
			display.value = 7;
		}
		else
		{
			display.value += 7;
		}
	}

	number8.onclick = () => {
		if (display.value == "0")
		{
			display.value = 8;
		}
		else
		{
			display.value += 8;
		}
	}

	number9.onclick = () => {
		if (display.value == "0")
		{
			display.value = 9;
		}
		else
		{
			display.value += 9;
		}
	}

	plus.onclick = () => {
		a = display.value;
		display.value = 0;
		action = "+";
		console.log(a);
	}

	division.onclick = () => {
		a = display.value;
		display.value = 0;
		action = "/";
		console.log(a);
	}

	clearAll.onclick = () => {
		a = display.value;
		display.value = 0;
	}

	percent.onclick = () => {
		a = display.value;
		display.value = a / 100;
	}

	multiplication.onclick = () => {
		a = display.value;
		display.value = 0;
		action = "*";
		console.log(a);
	}

	plusMinus.onclick = () => {
		display.value = -display.value;
	}

	equal.onclick = () => {
		b = display.value;
		if (action == "+") 
		{
			display.value = +a + +b;
		}
		if (action == "-")
		{
			display.value = +a - +b;
		}
		if (action == "/") 
		{
			if (b == "0") 
			{
				display.value = "Так нельзя";
			}
			else 
			{
				display.value = +a / +b;
			}
		}	
		if (action == "*")
		{
			display.value = +a * +b;
		}
		console.log(a);
		console.log(b);
	}

	point.onclick = () => {
		if (display.value.indexOf(".") == -1)
		{
			display.value += ".";
		}
		console.log(a);
	}

	minus.onclick = () => {
		a = display.value;
		display.value = 0;
		action = "-";
		console.log(a);
	}
}