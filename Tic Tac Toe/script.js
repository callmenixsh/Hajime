let homescrn = document.getElementById("titlescreen");
let gameUI = document.getElementById("gamerunning");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let pturn = document.getElementById("turn");
let title = document.getElementById("heading");
let gridder = document.getElementById("tttgrid");
let allBoxes = document.querySelectorAll(".box");
let win1 = document.getElementById("result1");
let win2 = document.getElementById("result2");
let pname1 = document.getElementById("p1info");
let pname2 = document.getElementById("p2info");
let pl1 = p1.value;
let pl2 = p2.value;
let p1win = 0;
let p2win = 0;
let turn = 0;

// Helper function to add/remove classes with delay
function changeScreen(fromScreen, toScreen) {
    fromScreen.classList.add("fade-out");
    setTimeout(() => {
        fromScreen.classList.remove("active");
        fromScreen.classList.add("inactive");
        fromScreen.classList.remove("fade-out");
        toScreen.classList.remove("inactive");
        toScreen.classList.add("active", "fade-in");

        setTimeout(() => {
            toScreen.classList.remove("fade-in");
        }, 200);
    }, 200);
}

// Start game with smooth transition
function start() {
	title.classList.remove("home");
	title.classList.add("game");
    changeScreen(homescrn, gameUI);
    pl1 = p1.value;
    pl2 = p2.value;
    pname1.textContent = `${pl1}`;
    pname2.textContent =  `${pl2}`;
    pturn.textContent = `${pl1}'s Turn`;
    win1.textContent = `${pl1} - ${p1win}`;
    win2.textContent = `${p2win} - ${pl2}`;
}

// Reset game with smooth transition
function reset() {
	title.classList.add("home");
	title.classList.remove("game");
    rematch();
    p1win = 0;
    p2win = 0;
    win1.textContent = `${pl1} - ${p1win}`;
    win2.textContent = `${p2win} - ${pl2}`;
    changeScreen(gameUI, homescrn);
}

function rematch() {
        allBoxes.forEach((box) => {
            box.innerHTML = ""; 
            box.onclick = function () {
                chuu(box.id);
            };
            box.classList.remove("winning-box", "losing-box", "drawed");
        });
        gridder.classList.add("disappear");
        gridder.addEventListener("animationend", () => {
            gridder.classList.remove("disappear");
        turn = 0;
        pturn.textContent = `${pl1}'s Turn`;
    }, { once: true });
}

// Click handler
function chuu(boxID) {
    let box = document.getElementById(boxID);
    if (!box.hasChildNodes()) {
        if (turn == 0) {
            box.innerHTML = `<img src="icons/cross.png" alt="x"> `;
            turn = 1;
            pturn.textContent = `${pl2}'s Turn`;
        } else if (turn == 1) {
            box.innerHTML = `<img src="icons/circle.png" alt="o"> `;
            turn = 0;
            pturn.textContent = `${pl1}'s Turn`;
        }
        box.onclick = null;
    }
    if (!wincheck()) {
        checkdraw();
    }
}

// Check if all boxes are filled
function allBoxesFilled() {
    for (let box of allBoxes) {
        if (!box.hasChildNodes()) {
            return false;
        }
    }
    return true;
}

// Check for winning condition
function wincheck() {
    const winPatterns = [
        ["b1", "b2", "b3"],
        ["b4", "b5", "b6"],
        ["b7", "b8", "b9"],
        ["b1", "b4", "b7"],
        ["b2", "b5", "b8"],
        ["b3", "b6", "b9"],
        ["b1", "b5", "b9"],
        ["b3", "b5", "b7"],
    ];

    for (let pattern of winPatterns) {
        let a = document.getElementById(pattern[0]).firstChild;
        let b = document.getElementById(pattern[1]).firstChild;
        let c = document.getElementById(pattern[2]).firstChild;

        if (a && b && c && a.alt === b.alt && a.alt === c.alt) {
            allBoxes.forEach((box) => {
                if (!pattern.includes(box.id)) {
                    box.classList.add("losing-box");
                }
            });
            document.getElementById(pattern[0]).classList.add("winning-box");
            document.getElementById(pattern[1]).classList.add("winning-box");
            document.getElementById(pattern[2]).classList.add("winning-box");

            if (turn == 1) {  // Changed to check previous turn
                pturn.textContent = `${pl1} WON`;
                p1win++;
            } else if (turn == 0) {
                pturn.textContent = `${pl2} WON`;
                p2win++;
            }
            win1.textContent = `${pl1} - ${p1win}`;
            win2.textContent = `${p2win} - ${pl2}`;
            gameend();
            return true;
        }
    }
    return false;
}

// Check for draw condition
function checkdraw() {
    if (allBoxesFilled()) {
        pturn.textContent = `It's a TIE`;
        allBoxes.forEach((box) => {
            box.classList.add("drawed");
        });
        gameend();
    }
}

// End the game
function gameend() {
    allBoxes.forEach((box) => {
        box.onclick = null;
    });
}
