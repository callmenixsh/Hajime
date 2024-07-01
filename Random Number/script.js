let mini = parseInt(document.getElementById("mini").value);
let maxi = parseInt(document.getElementById("maxi").value);


document.getElementById("roll").onclick = function () {
    mini = parseInt(document.getElementById("mini").value);
    maxi = parseInt(document.getElementById("maxi").value);
    if (isNaN(mini) || isNaN(maxi) || mini >= maxi) {
        document.getElementById("result").textContent = "Invalid Input";
        return;
    }
    
    const resultElement = document.getElementById("result");
    const duration = 1000; // animation duration in ms
    const end = Math.floor(Math.random() * (maxi - mini + 1)) + mini;
    const startTime = performance.now();

    function animate(currentTime) {
        const elapsed = currentTime - startTime;
        if (elapsed >= duration) {
            resultElement.textContent = end;
            return;
        }

        resultElement.textContent = Math.floor(Math.random() * (maxi - mini + 1)) + mini;
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
};
