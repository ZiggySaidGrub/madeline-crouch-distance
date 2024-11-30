const button = document.getElementById("button");
const ansDiv = document.getElementById("answer");

button.addEventListener("click", function() {
  // Code to execute when the button is clicked
  let distance = document.getElementById("madelines").value;
  answer = distance/3.81;
  ansObj = document.createElement("p");
  ansObj.textContent = toString(answer)+" Squished Madelines Tall";
  ansDiv.appendChild(ansObj);
});