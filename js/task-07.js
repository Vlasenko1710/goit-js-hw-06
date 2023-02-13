

const controlSizeEl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
controlSizeEl.addEventListener("input", handleInputRange);
function handleInputRange(event) {
  text.style.fontSize = event.currentTarget.value + "px";
}