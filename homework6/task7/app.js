const countrySelect = document.getElementById("country");
const citiesSelect = document.getElementById("cities");
const selectionResult = document.getElementById("selectionResult");

const citiesData = {
  ger: ["Berlin", "Munich", "Hamburg"],
  usa: ["New York", "Los Angeles", "Chicago"],
  ukr: ["Kyiv", "Lviv", "Kharkiv"]
};

function updateCities() {
  const selectedCountry = countrySelect.value;
  citiesSelect.innerHTML = "";

  if (citiesData[selectedCountry]) {
    for (const city of citiesData[selectedCountry]) {
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city;
      citiesSelect.appendChild(option);
    }
  }
}

countrySelect.addEventListener("change", () => {
  updateCities();
  selectionResult.textContent = `Обрана країна: ${countrySelect.options[countrySelect.selectedIndex].text}`;
});

citiesSelect.addEventListener("change", () => {
  selectionResult.textContent = `Обрана країна: ${countrySelect.options[countrySelect.selectedIndex].text}, Місто: ${citiesSelect.options[citiesSelect.selectedIndex].text}`;
});

updateCities();