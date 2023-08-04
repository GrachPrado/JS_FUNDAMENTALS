// 1) вибрати всі теги із класом circle
const circleClassList = document.querySelectorAll(".circle");
console.log(circleClassList);
// 2) перебрати кожен елемент, і вибрати його data-anim значення
// 3) вибране значення додати як клас за допомогою classList до цього елемента.
for (let i = 0; i < circleClassList.length; i++) {
    console.log(circleClassList[i].className += " " + circleClassList[i].getAttribute("data-anim") );
  }

// 4) перевірити чи застосувались анімації

let chosenElement = document.querySelector(".circle");
chosenElement.addEventListener('animationstart', (ev) => {
    console.log("animation started", ev);
})
