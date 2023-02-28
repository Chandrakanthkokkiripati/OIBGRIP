let temparatureEl = (document.getElementById("Degrees"));
let degreeTypeEl = document.getElementById("degreeType");
let resultEl = document.getElementById("result");
let resultBtnEl = document.getElementById("convertTemparature");

resultBtnEl.addEventListener("click", function() {
    let intTemparatureEl = parseInt(temparatureEl.value);
    let typeEl = degreeTypeEl.value;
    if (typeof(intTemparatureEl) === typeof(5)) {
        if (typeEl === "Celsius") {
            resultEl.value = intTemparatureEl + " °C";
        } else if (typeEl === "Kelvin") {
            let kelvinTemp = intTemparatureEl - 273.15;
            resultEl.value = kelvinTemp + " °C";
        } else if (typeEl === "Fahrenheit") {
            let fahrenheitTemp = intTemparatureEl;
            let celciusTemp = (fahrenheitTemp - 32) * (5 / 9);
            resultEl.value = celciusTemp + " °C";
        }
    } else {
        alert("Enter a valid number!");
    }
});