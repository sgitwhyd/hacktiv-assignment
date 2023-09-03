const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

window.addEventListener("load", () => {
	display.value = "0";
});

let query = [];

const isOperator = (char) => {
	const regex = /^[+-/*]+$/gi;
	return regex.test(char);
};

const addNumber = (number) => {
	if (isOperator(number)) {
		if (query[query.length - 1] === number) return;
		if (isOperator(query[query.length - 1])) {
			query[query.length - 1] = number;
			return (display.value = query.join(""));
		}
	}

	query = [...query, number];
	display.value = query.join("");
};

const backspace = () => {
	query = query.slice(0, -1);
	if (query.length === 0) return (display.value = "0");
	return (display.value = query.join(""));
};

const clear = () => {
	query = [];
	display.value = "0";
	return;
};

const equal = () => {
	const result = eval(query.join(""));
	query = [result];
	display.value = result;
	return;
};

buttons.forEach((button) => {
	button.addEventListener("click", (e) => {
		const { target } = e;
		const { innerText } = target;

		if (innerText === "CE") {
			return clear();
		}

		if (innerText === "=") {
			return equal();
		}

		if (innerText === "AC") {
			return backspace();
		}

		addNumber(innerText);
	});
});
