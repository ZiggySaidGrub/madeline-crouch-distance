const button = document.getElementById("button");

button.addEventListener("click", function() {
  // Code to execute when the button is clicked
  let distance = document.getElementById("madelines").value;
  answer = distance/3.81;
  ansObj = createElement("p");
  ansObj.value = answer;
  document.body.appendChild(ansObj);
});