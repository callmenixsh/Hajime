let count = 0;
Inc

document.getElementById("Inc").onmousedown = function(){
    count++;
    document.getElementById("Count").textContent = count;
}

document.getElementById("Dec").onclick = function(){
    count--;
    document.getElementById("Count").textContent = count;
}

document.getElementById("Res").onclick = function(){
    count = 0;
    document.getElementById("Count").textContent = 0;
}


