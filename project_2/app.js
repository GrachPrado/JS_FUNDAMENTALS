function createAList(){
    //Create a container
    let createAContainer = document.createElement("div");
    createAContainer.className = "container";
    // get input name of the list form
    let getForm = document.querySelector(".nameOfTheList");
    // append after the form
    getForm.after(createAContainer);
    // Create / add a heading
    let createAHeading = document.createElement("h3");
    let getHeading = document.getElementById("listName").value;
    createAHeading.innerHTML = getHeading;
    createAContainer.append(createAHeading);
    // Create / add a p tag
    let createAParagraph = document.createElement("p");
    // create an input
    let addTask = document.createElement("input");
    addTask.className = "new-task";
    addTask.type = "text";
    createAParagraph.append(addTask);
    // create a button
    let addButton = document.createElement("button");
    addButton.className = "addButton";
    addButton.innerHTML = "Add button";
    createAParagraph.append(addButton);
    // add the paragraph to the end of the container
    createAContainer.append(createAParagraph);
    // incomplete list heading
    let createAnIncompleteHeading = document.createElement("h3");
    createAnIncompleteHeading.innerHTML = "Todo";
    createAContainer.append(createAnIncompleteHeading);
    // incomplete list
    let createAnIncompleteList = document.createElement("ul");
    createAnIncompleteList.className = "incomplete-tasks";
    createAContainer.append(createAnIncompleteList);
     // complete list heading
     let createACompleteHeading = document.createElement("h3");
     createACompleteHeading.innerHTML = "Complete";
     createAContainer.append(createACompleteHeading);
     // incomplete list
     let createACompleteList = document.createElement("ul");
     createACompleteList.id = "complete-tasks";
     createAContainer.append(createACompleteList);

        let getAddButton = document.querySelector(".addButton");
        getAddButton.addEventListener("click", () => {
                let getInCompleteList = document.getElementsByClassName("incomplete-tasks");
                let createList = document.createElement("li");
                // Create / add checkBox
                let createCheckBox = document.createElement("input");
                createCheckBox.type = "checkbox";
                createList.append(createCheckBox);
                // Create / add label
                let createLabel = document.createElement("label");
                let newTaskInput = document.querySelector(".new-task");
                createLabel.innerHTML = newTaskInput.value;
                createList.append(createLabel);
                // Create / add input Text
                let createInput = document.createElement("input");
                createInput.type = "text";
                createList.append(createInput);
                // Create / Add edit button
                let createEditButton = document.createElement("button");
                createEditButton.className = "edit";
                createEditButton.innerHTML = "edit";
                createList.append(createEditButton);
                // Create / Add delete button
                let createDeleteButton = document.createElement("button");
                createDeleteButton.className = "delete"; 
                createDeleteButton.innerHTML = "delete";
                createList.append(createDeleteButton);

                for (let i = 0; i < getInCompleteList.length; i++) {
                    const element = getInCompleteList[i];
                    createAnIncompleteList.append(createList);
                }
            });
}

let addToDoListLayOut = document.getElementById("addButton");
addToDoListLayOut.addEventListener("click",createAList);


// Add a task
// function createAInCompleteList(){
//     let createList = document.createElement("li");
//     let createCheckBox = document.createElement("input");
//     createCheckBox.type = "checkbox";
//     let createLabel = document.createElement("label");
//     let createInput = document.createElement("input");
//     createInput.type = "text";
//     let createEditButton = document.createElement("button");
//     createEditButton.className = "edit";

//     let createDeleteButton = document.createElement("button");
//     createDeleteButton.className = "delete";  
// };