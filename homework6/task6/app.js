const windowSize = document.getElementById("windowSize");

function updateWindowSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  windowSize.innerHTML = `${width} x ${height}`;
}

// Викликаємо функцію спочатку для початкового значення
updateWindowSize();

// Відслідковування зміни розміру вікна і виклик функції оновлення
window.addEventListener("resize", updateWindowSize);
