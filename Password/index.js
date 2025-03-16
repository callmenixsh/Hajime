let includeLowercase = true;
let includeUppercase = true;
let includeNumbers = true;
let includeSymbols = true;

function toggler(btnId) {
    const btn = document.getElementById(btnId);
    if (!btn) {
        console.error("Element not found: " + btnId);
        return;
    }

    if (btn.classList.contains("toggleOn")) {
        btn.classList.add("toggleOff");
        btn.classList.remove("toggleOn");
    } else {
        btn.classList.remove("toggleOff");
        btn.classList.add("toggleOn");
    }

    switch (btnId) {
        case "includeLowercase":
            includeLowercase = !includeLowercase;
            break;
        case "includeUppercase":
            includeUppercase = !includeUppercase;
            break;
        case "includeNumbers":
            includeNumbers = !includeNumbers;
            break;
        case "includeSymbols":
            includeSymbols = !includeSymbols;
            break;
    }
}

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+~";

    let allowedChars = "";
    let password = "";

    if (includeLowercase) allowedChars += lowercaseChars;
    if (includeUppercase) allowedChars += uppercaseChars;
    if (includeNumbers) allowedChars += numberChars;
    if (includeSymbols) allowedChars += symbolChars;

    if (allowedChars.length === 0) {
        return "Please select at least one character type";
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

function generateAndDisplayPassword() {
    const passwordLength = parseInt(document.getElementById("passlength").value);

    if (isNaN(passwordLength) || passwordLength <= 0) {
        alert("Please enter a valid password length");
        return;
    }

    const password = generatePassword(
        passwordLength,
        includeLowercase,
        includeUppercase,
        includeNumbers,
        includeSymbols
    );

    document.getElementById("generatedPassword").innerText = `${password}`;

    console.log(`Generated Password: ${password}`);
}

document.getElementById("generatePassword").addEventListener("click", generateAndDisplayPassword);
