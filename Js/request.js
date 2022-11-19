// PROGRESS BAR

// VARIABLES FOR ELEMENTS IN PROGRESS BAR [ANNUAL LEAVE]
let progressRadar = document.querySelector(".progressRadar");
let valueHolder = document.querySelector(".progValue");

let counter = 0;
let counterEndValue = 2;
let counterSpeed = 500;

let progress = setInterval(() => {
  counter++;
  valueHolder.textContent = `${counter}/10`;

  progressRadar.style.background = `conic-gradient(
      green ${counter * 36}deg, #111 ${counter * 36}deg
    )`;

  if (counter == counterEndValue) {
    clearInterval(progress);
  }
}, counterSpeed);

// VARIABLES FOR ELEMENTS IN PROGRESS BAR [LEAVE OF ABSENCE]
let progressRadar2 = document.querySelector(".progressRadar2");
let valueHolder2 = document.querySelector(".progValue2");

let counter2 = 0;
let counterEndValue2 = 4;
let counterSpeed2 = 500;

let progress2 = setInterval(() => {
  counter2++;
  valueHolder2.textContent = `${counter2}/10`;

  progressRadar2.style.background = `conic-gradient(
      green ${counter2 * 36}deg, #111 ${counter2 * 36}deg
    )`;

  if (counter2 == counterEndValue2) {
    clearInterval(progress2);
  }
}, counterSpeed2);

// VARIABLES FOR ELEMENTS IN PROGRESS BAR [LEAVE WITHOUT PAY]
let progressRadar3 = document.querySelector(".progressRadar3");
let valueHolder3 = document.querySelector(".progValue3");

let counter3 = 0;
let counterEndValue3 = 7;
let counterSpeed3 = 500;

let progress3 = setInterval(() => {
  counter3++;
  valueHolder3.textContent = `${counter3}/10`;

  progressRadar3.style.background = `conic-gradient(
      green ${counter3 * 36}deg, #111 ${counter3 * 36}deg
    )`;

  if (counter3 == counterEndValue3) {
    clearInterval(progress3);
  }
}, counterSpeed3);
