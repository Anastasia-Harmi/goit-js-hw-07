function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btn = document.querySelector(".change-color");
const textColor = document.querySelector(".color");
btn.addEventListener("click", (event) => {
  let newColor = getRandomHexColor();
  btn.style.backgroundColor = newColor;
  textColor.style.color = newColor;
});
