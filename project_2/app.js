function createAList() {
  // Create a container
  let createAContainer = document.createElement("div");
  createAContainer.className = "container";

  // Get input name of the list form
  let getForm = document.querySelector(".nameOfTheList");

  // Append the container after the form
  getForm.after(createAContainer);

  // Create / add a heading
  let createAHeading = document.createElement("h3");
  let getHeading = document.getElementById("listNameHeading").value;
  createAHeading.innerHTML = getHeading;
  createAContainer.append(createAHeading);

  // Create / add a p tag
  let createAParagraph = document.createElement("p");
  // Add the paragraph to the end of the container
  createAContainer.appendChild(createAParagraph);
  // Create / add an input for task name
  let addTask = document.createElement("input");
  addTask.className = "new-task";
  addTask.type = "text";
  createAParagraph.appendChild(addTask);

  // Create / add a button to add tasks
  let addButton = document.createElement("button");
  addButton.className = "addButtonItems";
  addButton.innerHTML = "Add button";
  createAParagraph.appendChild(addButton);

  // Incomplete list heading
  let createAnIncompleteHeading = document.createElement("h3");
  createAnIncompleteHeading.innerHTML = "Todo";
  createAContainer.appendChild(createAnIncompleteHeading);

  // Incomplete list
  let createAnIncompleteList = document.createElement("ul");
  createAnIncompleteList.className = "incomplete-tasks";
  createAContainer.appendChild(createAnIncompleteList);

  // Complete list heading
  let createACompleteHeading = document.createElement("h3");
  createACompleteHeading.innerHTML = "Complete";
  createAContainer.appendChild(createACompleteHeading);

  // Incomplete list
  let createACompleteList = document.createElement("ul");
  createACompleteList.id = "complete-tasks";
  createAContainer.appendChild(createACompleteList);
  saveToLocalStorage();
  // Add an event listener to add tasks
  addButton.addEventListener("click", () => {
    let createAnIncompleteList =
      createAContainer.querySelector(".incomplete-tasks");

    // Create a new list item
    let createList = document.createElement("li");

    // Create / add checkBox
    let createCheckBox = document.createElement("input");
    createCheckBox.type = "checkbox";
    createList.appendChild(createCheckBox);

    // Create / add label
    let createLabel = document.createElement("label");
    createLabel.textContent = addTask.value;
    createList.appendChild(createLabel);

    // Create / add input Text
    let createInput = document.createElement("input");
    createInput.id = "item";
    createInput.type = "text";
    createList.appendChild(createInput);

    // Create / Add edit button
    let createEditButton = document.createElement("button");
    createEditButton.className = "edit";
    createEditButton.innerHTML = "edit";
    createList.appendChild(createEditButton);

    // Create / Add delete button
    let createDeleteButton = document.createElement("button");
    createDeleteButton.className = "delete";
    createDeleteButton.innerHTML = "delete";
    createList.appendChild(createDeleteButton);

    // Append the new list item to the incomplete tasks list within this container
    createAnIncompleteList.appendChild(createList);
    addTask.value = ""; // Reset the input field after adding a task
    saveToLocalStorage();
  });

  // Add an event listener to the checkboxes for moving tasks
  createAContainer.addEventListener("change", (event) => {
    if (event.target.type === "checkbox") {
      const listItem = event.target.parentElement;
      const incompleteList =
        createAContainer.querySelector(".incomplete-tasks");
      const completeList = createAContainer.querySelector("#complete-tasks");

      if (event.target.checked) {
        // Move the checked item to the complete list
        completeList.appendChild(listItem);
      } else {
        // Move the unchecked item back to the incomplete list
        incompleteList.appendChild(listItem);
      }
    }
    saveToLocalStorage();
  });

  // Add an event listener to the edit buttons
  createAContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("edit")) {
      const listItem = event.target.parentElement;
      const label = listItem.querySelector("label");
      const input = listItem.querySelector("input[type='text']");

      // Toggle the input field and label for editing
      label.style.display = "none";
      input.style.display = "inline-block";
      input.value = label.textContent;
      input.focus();

      // Save the edited text when the input loses focus
      input.addEventListener("blur", () => {
        label.style.display = "inline-block";
        input.style.display = "none";
        label.textContent = input.value;
        saveToLocalStorage();
      });
    }
    saveToLocalStorage();
  });

  // Add an event listener to the delete buttons
  createAContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete")) {
      const listItem = event.target.parentElement;
      const list = listItem.parentElement;

      // Remove the clicked item from the list
      list.removeChild(listItem);
    }
    saveToLocalStorage();
  });
}
// SAVED DATA
function saveToLocalStorage() {
  const divContainer = document.getElementsByClassName("container");
  const elementArray = Array.from(divContainer);

  // Create an array to hold serialized HTML content
  const serializedDivs = [];

  elementArray.forEach(function (element) {
    const serializedDiv = element.innerHTML;
    serializedDivs.unshift(serializedDiv);
  });

  // Convert the array to JSON and store it in local storage
  const attachJSON = JSON.stringify(serializedDivs);
  localStorage.setItem("divContainerData", attachJSON);
}

// LOAD DATA
function loadFromLocalStorage() {
  const attachJSON = localStorage.getItem("divContainerData");
  if (attachJSON) {
    // Parse the JSON into an array of HTML strings
    const serializedDivs = JSON.parse(attachJSON);

    // Get input name of the list form
    let getForm = document.querySelector(".nameOfTheList");

    // Loop through the array and create a container for each HTML string
    serializedDivs.forEach(function (containerHeading) {
      // Create a container
      let createAContainer = document.createElement("div");
      createAContainer.className = "container";

      // Set the innerHTML of the container to the parsed HTML string
      createAContainer.innerHTML = containerHeading;

      // Append the container after the form
      getForm.after(createAContainer);
    });
  }
}


let addToDoListLayOut = document.getElementById("addButton");
addToDoListLayOut.addEventListener("click", createAList);

//delete Local storage

function deleteLocalStorage() {
  localStorage.clear();
}

// load
window.addEventListener("load", loadFromLocalStorage);
