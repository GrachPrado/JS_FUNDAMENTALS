const button1 = document.getElementById("blueBackground");
const button2 = document.getElementById("pinkBackground");
const button3 = document.getElementById("brownBackground");
const link = document.getElementById("link");
const body = document.body;

button1.addEventListener("click", () => {
  body.style.backgroundColor = "blue";
});

button2.addEventListener("dblclick", () => {
  body.style.backgroundColor = "pink";
});

let button3Pressed = false;
button3.addEventListener("mousedown", () => {
  button3Pressed = true;
  body.style.backgroundColor = "brown";
});

document.addEventListener("mouseup", () => {
  if (button3Pressed) {
    button3Pressed = false;
    body.style.backgroundColor = "white";
  }
});

link.addEventListener("mouseover", () => {
  body.style.backgroundColor = "yellow";
});

link.addEventListener("mouseout", () => {
  body.style.backgroundColor = "white";
});