// h1
const h1 = document.body.children;
h1[1].style.backgroundColor = "rgb(144, 238, 144)";

// div p

const divParagraph = document.getElementById("myDiv");
divParagraph.children[0].style.fontWeight = "bold";
divParagraph.children[1].style.color = "red";
divParagraph.children[2].style.textDecoration = "underline";
divParagraph.children[3].style.fontStyle = "italic";

// ul

const ulList = document.getElementById("myList");

ulList.style.display = "flex";
ulList.style.listStyleType = "none";

// span
let answer = document.querySelector("span");
answer.style.visibility = "hidden";