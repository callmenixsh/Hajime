let diceNum = document.getElementById("nofdice").value;
let diceResult = document.getElementById("result");
let historyContainer = document.getElementById("history");
let prev = document.getElementById("prev");


let values = [];
let images = [];
let hitory = [];
let rolled = false;

function rollDice() {
	historyContainer.innerHTML = hitory.join(``);
	hitory = [];
	if (rolled == true) {
		prev.textContent = "Last Roll:";
	}

	images = [];
	values = [];
	diceNum = document.getElementById("nofdice").value;
	diceResult = document.getElementById("result");
	historyContainer = document.getElementById("history");

	for (let i = 0; i < diceNum; i++) {
		let value = Math.floor(Math.random() * 6) + 1;
		values.push(value);
		console.log(value);
		images.push(`<img src="dice${value}.png">`);
		hitory.push(`<img src="dice${value}.png">`);
	}
	console.log(values);
	diceResult.innerHTML = images.join("");
	rolled = true;
}

document.getElementById("nofdice").onkeyup = function () {
	if (rolled == true) {
		prev.textContent = "Last Roll:";
	}
	historyContainer.innerHTML = hitory.join(``);
	diceNum = document.getElementById("nofdice").value;
	const preview = [];
	for (let i = 0; i < diceNum; i++) {
		preview.push(`<img src="dice1.png">`);
	}
	diceResult.innerHTML = preview.join("");
};
