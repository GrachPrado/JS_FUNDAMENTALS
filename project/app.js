function createTask() {
  /*Create a li element */
  let createList = document.createElement("li");
  let createCheckBox = document.createElement("input");
  let createDeleteButton = document.createElement("button");
  let createEditButton = document.createElement("button");
  let taskText = document.createElement("span");
  const getForm = document.forms["container"]["task"].value;
  let incompleteTasks = document.getElementById("incomplete_tasks");

  /*set attribute for the list*/
  createList.setAttribute("data-delete", "delete");
  createList.className = "incomplete_tasks-list";

  /*checkbox element in the li*/
  createCheckBox.setAttribute("type", "checkbox");
  createList.prepend(createCheckBox);

  /*delete button tags in the li element*/
  createDeleteButton.setAttribute("type", "button");
  createDeleteButton.className = "delete";
  createDeleteButton.textContent = "delete";
  createList.append(createDeleteButton);

  /*edit button tags in the li element*/
  createEditButton.setAttribute("type", "button");
  createEditButton.className = "edit";
  createEditButton.textContent = "edit";
  createList.append(createEditButton);

  /*input value in the li element*/
  taskText.textContent = getForm;
  createList.prepend(taskText);

  /*emmbed the li element in the ul tag*/
  incompleteTasks.append(createList);

  /*Delete a task */
  incompleteTasks.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete")) {
      event.target.parentNode.remove();
    }
     /*Edit a task*/
     if (event.target.classList.contains("edit")) {
      let inputText = document.createElement('input');
      inputText.placeholder = taskText.textContent;
      taskText.replaceWith(inputText); // Replace the <span> with the <input>
  }
  

  });

}

let addButton = document.getElementById("addButton");
addButton.addEventListener("click", createTask);


// let getDeleteButton = document.querySelectorAll(".delete");

// if (getDeleteButton.length > 0) {
//   for (let i = 0; i < getDeleteButton.length; i++) {
//     const element = getDeleteButton[i];
//     element.addEventListener("click", function () {
//       this.parentNode.remove();
//     });
//   }
// }
