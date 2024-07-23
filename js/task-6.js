function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  const boxesContainer = document.querySelector("#boxes");
  boxesContainer.innerHTML = ""; // Очищення попередніх елементів

  const boxSizeIncrement = 10; // Збільшення розміру кожного наступного елемента
  const initialSize = 30; // Розмір першого елемента

  const tempContainer = document.createElement("div");

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = initialSize + i * boxSizeIncrement;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "44px"; // Додаємо відступ між елементами
    tempContainer.append(box);
  }
  // Додаємо тимчасовий контейнер до boxesContainer
  boxesContainer.append(tempContainer);
}

function destroyBoxes() {
  document.querySelector("#boxes").innerHTML = ""; // Очищення вмісту
}

document.querySelector("[data-create]").addEventListener("click", () => {
  const input = document.querySelector("#controls input");
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
  input.value = ""; // Очищення значення в інпуті
});

document
  .querySelector("[data-destroy]")
  .addEventListener("click", destroyBoxes);
