const deleteButton = document.getElementById("deleteButton");
const dropdown = document.getElementById("dropdown");

deleteButton.addEventListener("click", () => {
  const selectedOption = dropdown.options[dropdown.selectedIndex];
  if (selectedOption) {
    dropdown.removeChild(selectedOption);
  }
});