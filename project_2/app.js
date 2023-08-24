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
    addTask.id = "new-task";
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
}

let addToDoListLayOut = document.getElementById("addButton");
addToDoListLayOut.addEventListener("click",createAList);
