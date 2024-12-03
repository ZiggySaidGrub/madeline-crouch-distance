const ansObj = document.getElementById("ansObj");

function roundToThousandth(num) {
    return math.round(num * 1000) / 1000;
}

function update() {
    let distance = document.getElementById("distance").value;
    let unit = document.getElementById("unit").value;
    let distances = [distance,distance/12,distance*3.280839895,distance*3280.839895,distance*0.032808398950131,distance*5280,distance*(3.104e+16
    ),distance*6076.11549];
    answer = distances[unit]/((6/11)*7);
    ansObj.textContent = "≈ "+roundToThousandth(answer)+" Squished Madelines";
    requestAnimationFrame(update);
}
requestAnimationFrame(update);