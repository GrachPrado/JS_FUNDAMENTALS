const button = document.getElementById("button");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.innerHTML = "I was pressed!";
});

button.addEventListener("mouseover", () => {
  message.innerHTML = "Mouse on me!";
});

button.addEventListener("mouseout", () => {
  message.innerHTML = "Mouse is not on me!";
});