function validate() {
    let inputFields = document.querySelectorAll(".arr");
  
    let outputFields = document.querySelector(".out");
    outputFields.innerHTML =
      inputFields[0].value +
      "<br>" +
      inputFields[1].value +
      "<br>" +
      inputFields[2].value +
      "<br>" +
      inputFields[3].value;
  }
  
  document.querySelector(".btn").addEventListener("click", validate);
  