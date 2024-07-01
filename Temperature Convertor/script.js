let submitbtn = document.getElementById("submit");
let result = document.getElementById("result");
let Cel,Kel,Far;
submitbtn.onclick = function () {
	let Tmp = parseFloat(document.getElementById("temperature").value);
	let Unit = document.getElementById("unit").value;
	console.log(Tmp, Unit);

    if (Unit === "-" || isNaN(Tmp)) {
		window.alert("Enter the Temperature and Select the Unit");
	}
    else {
	if (Unit === "C") {
		Kel = (Tmp + 273.15).toFixed(2);
		Cel = Tmp.toFixed(2);
		Far = ((Tmp * 9) / 5 + 32).toFixed(2);
	
	} else if (Unit === "K") {
		Kel = Tmp.toFixed(2);
		Cel = (Tmp - 273.15).toFixed(2);
		Far = ((Tmp * 9) / 5 - 459.67).toFixed(2);
	
	} else if (Unit === "F") {
		Kel = (((Tmp + 459.67) * 5) / 9).toFixed(2);
		Cel = (((Tmp - 32) * 5) / 9).toFixed(2);
		Far = Tmp.toFixed(2);
	} 
    result.innerHTML = `${Cel} °C <br><br>${Far} °F <br><br> ${Kel} °K`;
	}
   
};

submitbtn.addEventListener("click", function() {
    submitbtn.classList.add("clicked");

    setTimeout(function() {
        submitbtn.classList.remove("clicked");
    }, 500);
});
