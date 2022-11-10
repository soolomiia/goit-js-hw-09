import Notiflix from 'notiflix';

const form = document.querySelector('form');
const startButton = document.querySelector('button');
const deley = document.querySelectorAll('input')[0];
const step = document.querySelectorAll('input')[1];
const amount = document.querySelectorAll('input')[2];

form.addEventListener('submit', e => {
  e.preventDefault();
});


function createPromise(position, delay) {
  return new Promise(() =>{
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  }})
}


function startPromis() {
  let time = Number(deley.value);
  let deleyTime = Number(deley.value);

  for (let i = 1; i <= amount.value; i += 1) {
    setTimeout(() => {
      createPromise(i, time);
      time += Number(step.value);
    }, deleyTime);
    deleyTime += Number(step.value);
  }
}
startButton.addEventListener('click', startPromis);