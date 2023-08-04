// Task 1
function alertListLements(){
    const list = document.getElementById("list").children;
    alert
    (`
    Результат виводу:${list[0].innerHTML},${list[list.length - 1].innerHTML},${list[1].innerHTML},${list[3].innerHTML},${list[2].innerHTML}
    `)
}
const button = document.getElementById("button");
button.addEventListener("click",alertListLements );