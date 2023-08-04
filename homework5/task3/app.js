// Main Tag
const createMain = document.createElement("main");
createMain.className = "mainClass check item";
const insertMain = document.body.prepend(createMain);


// Div tag
const div = document.createElement("div");
div.id = "myDiv";
const getMainTag = document.querySelector("main");
const insertDiv = getMainTag.prepend(div);

// p tag
const createParagraph = document.createElement("p");
createParagraph.innerHTML = "First paragraph";
const getParagraph = document.querySelector("div");
const insertParagraph = getParagraph.prepend(createParagraph);