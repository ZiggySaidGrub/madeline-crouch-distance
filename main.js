const ansObj = document.getElementById("ansObj");

function update() {
    let distance = document.getElementById("distance").value;
    answer = distance/3.81;
    ansObj.textContent = "≈ "+answer+" Squished Madelines";
    requestAnimationFrame(update);
  }
requestAnimationFrame(update);