

const controlSizeEl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
controlSizeEl.addEventListener("input", handleInputRange);
console.log(controlSizeEl);
text.style.fontSize = controlSizeEl.value + "px";
// text.style.fontSize = ((Number(controlSizeEl.max) - Number(controlSizeEl.min))/2) + "px";
function handleInputRange(event) {
  
   text.style.fontSize = event.currentTarget.value + "px";
}
