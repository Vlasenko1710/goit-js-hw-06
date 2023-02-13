const refs = {
    input: document.querySelector('#validation-input'),
};
refs.input.addEventListener('blur', onInputBlur);
const dataLenght = refs.input.getAttribute("data-length");
function onInputBlur(event) {
    
    if (refs.input.value.length == dataLenght
){
        refs.input.classList.add("valid");
         refs.input.classList.remove("invalid")
    } else {
        refs.input.classList.add("invalid");
        refs.input.classList.remove("valid")
        
    }
  
}

