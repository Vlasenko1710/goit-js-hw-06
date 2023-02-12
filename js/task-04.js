// const counterValue = document.querySelector('#value');
// // counterValue.textContent = value;
// console.log(Number(counterValue.textContent));
// const currentValue = Number(counterValue.textContent);
// console.log(currentValue);
// let newValue;
// const counterKlick = (e) => {
//     // newValue = currentValue + 1;
//     console.log("klick!!!");
// const action = this.dataset.action;
//       const counterValue = document.querySelector('#value');
//       const currentValue = Number(counterValue.textContent);
//       let newValue;

//       if (action === 'increment') {
//         newValue = currentValue + 1;
//       } else {
//         newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
//       }

//      currentValue = newValue;
// };
// const counterKlack = (e) => {
//     console.log("klack!!!");
// };
// const incrementBtn = document.querySelector('[data-action="increment"]');
// const decrementBtn = document.querySelector('[data-action="decrement"]');

// incrementBtn.addEventListener('click', counterKlick);

// decrementBtn.addEventListener('click', counterKlack);


const counter = function () {
  const btns = document.querySelectorAll('button');


  btns.forEach(btn => {
    btn.addEventListener('click', function () {
      const action = this.dataset.action;
      const counterValue = document.querySelector('#value');
      const currentValue = Number(counterValue.textContent);
      let newValue;

      if (action === 'increment') {
        newValue = currentValue + 1;
      } else {
          newValue = currentValue - 1;
        // newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
      }

     counterValue.textContent = newValue;
    })
  })

}

counter();