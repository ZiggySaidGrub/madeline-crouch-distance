const button = document.getElementById("button");
const ansDiv = document.getElementById("answer");

button.addEventListener("click", function() {
  // Code to execute when the button is clicked
  let oldObj = document.getElementById("ansObj");
  if(oldObj != null){oldObj.remove();}
  let distance = document.getElementById("distance").value;
  answer = distance/3.81;
  ansObj = document.createElement("p");
  ansObj.id = "ansObj"
  //ansObj.textContent = toString(answer)+" Squished Madelines Tall";
  ansObj.textContent = "≈ "+answer+" Squished Madelines";
  ansDiv.appendChild(ansObj);
});