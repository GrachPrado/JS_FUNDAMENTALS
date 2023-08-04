//  // Реалізувати логіку підрахунку ціни товару по його варіаціях
//  (шаблон наведений тут, при кліку на колір змінювати ціну товару).
// // Придумати ще 2 варіації, відяких буде залежати ціна товару.
function changeColor() {
    const colorList = document.querySelectorAll(".color");

    for (let i = 0; i < colorList.length; i++) {
        const element = colorList[i];
        element.addEventListener("click", function() {
            for (let j = 0; j < colorList.length; j++) {
                if(colorList[j].classList.contains("active")){
                    colorList[j].classList.remove("active");
                    element.classList.toggle("active");
                } 
            }
        });
    }
}

// Call the function directly when the DOM content is loaded
document.addEventListener("DOMContentLoaded", changeColor);
