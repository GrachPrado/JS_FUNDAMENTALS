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
                    document.getElementById("outprice").innerHTML = element.getAttribute("data-price");
                } 
            }

            colorList.forEach(() => {
                const getSpecificColor = element.getAttribute("color");
                // console.log(getSpecificColor);
                const showShoes = document.querySelectorAll(".shoe");
                for (let k = 0; k < showShoes.length; k++) {
                    const shoe = showShoes[k];
                    if(getSpecificColor ===  shoe.getAttribute("color")){
                        shoe.classList.add("show")
                    }
                    if(getSpecificColor !==  shoe.getAttribute("color")){
                        shoe.classList.remove("show")
                    }
                }
            });

            colorList.forEach(() => {
                const getSpecificColor = element.getAttribute("color");
                // console.log(getSpecificColor);
                const showGradient = document.querySelectorAll(".gradient");
                for (let k = 0; k < showGradient.length; k++) {
                    const grad = showGradient[k];
                    if(getSpecificColor ===  grad.getAttribute("color")){
                        grad.classList.add("second")
                        document.getElementById("outprice").innerHTML = grad.getAttribute("data-price");
                    }
                    if(getSpecificColor !==  grad.getAttribute("color")){
                        grad.classList.remove("second")
                    }
                }
            });
        });
    }
}

// Call the function directly when the DOM content is loaded
document.addEventListener("DOMContentLoaded", changeColor);