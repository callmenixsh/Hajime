let min = 1;
let max = 100;
document.getElementById("Title").textContent = `Guess the number between ${min} - ${max}`;
let rnum = Math.floor(Math.random() * (max - min + 1)) + min;
const hearts = document.getElementById("lives");
const hint = document.getElementById("Hint");
const submitButton = document.getElementById("submit");
const retryButton = document.getElementById("retry");
const revealButton = document.getElementById("reveal");
const guessInput = document.getElementById("guess");
const gameContainer = document.getElementById("game");

console.log(rnum);
let heart = "🤍";
let broken = "🖤";
let maxlives = 10;
let lives = maxlives;
hearts.textContent = heart.repeat(lives) + broken.repeat(maxlives - lives);

retryButton.onclick = function () {
	lives = maxlives;
	rnum = Math.floor(Math.random() * (max - min + 1)) + min;
	hearts.textContent = heart.repeat(lives) + broken.repeat(maxlives - lives);
	hint.textContent = "Good Luck!";
	guessInput.value = "0";
	guessInput.style.display = "block";
	gameContainer.style.display = "flex";
	retryButton.style.display = "none";
	document.getElementById("visual").textContent = "?";
};

submitButton.onclick = function () {
	let guess = parseInt(guessInput.value, 10);

	if (guess >= min && guess <= max) {
		if (lives > 0) {
			if (rnum === guess) {
				hint.textContent = "Yay you won! 🥳";
				document.getElementById("visual").textContent = rnum;
				gameContainer.style.display = "none";
				guessInput.style.display = "none";
				retryButton.style.display = "block";
			} else if (rnum > guess) {
				hint.textContent = "Too Low";
				lives--;
			} else if (rnum < guess) {
				hint.textContent = "Too High";
				lives--;
			}
			hearts.textContent = heart.repeat(lives) + broken.repeat(maxlives - lives);
			console.log(guess);
			console.log(`Lives remaining: ${lives}`);
		}
		if (lives <= 0) {
			hint.textContent = "You lost!";
			document.getElementById("visual").textContent = rnum;
			gameContainer.style.display = "none";
			retryButton.style.display = "block";
		}
	} else {
		hint.textContent = "Invalid Guess";
	}
};

revealButton.onclick = function () {
	hint.textContent = `The number was ${rnum}`;
	gameContainer.style.display = "none";
	guessInput.style.display = "none";
	retryButton.style.display = "block";
};
