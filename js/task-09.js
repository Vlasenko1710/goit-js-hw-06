const backgroundEl = document.querySelector("body");
const btnChange = document.querySelector(".change-color");
const color = document.querySelector(".color");

btnChange.addEventListener("click", onChangeColor);

function onChangeColor(event) {
  let nameColor = [getRandomHexColor()]
  backgroundEl.style.backgroundColor = nameColor;
  color.textContent = nameColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
