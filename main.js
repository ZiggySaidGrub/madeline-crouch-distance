const ansObj = document.getElementById("ansObj");

function roundToThousandth(num) {
    return math.round(num * 1000) / 1000;
}

function update() {
    let distance = document.getElementById("distance").value;
    answer = distance/3.81;
    ansObj.textContent = "≈ "+roundToThousandth(answer)+" Squished Madelines";
    requestAnimationFrame(update);
}
requestAnimationFrame(update);