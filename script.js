let inputAdults = document.getElementById("adults");
let inputChild = document.getElementById("child");
let inputDuration = document.getElementById("duration");

let resultado = document.getElementById("result");

function calculate() {
  console.log("Calculando...");

  let adults = inputAdults.value;
  let child = inputChild.value;
  let duration = inputDuration.value;

  let tam = meatp(duration) * adults + (meatp(duration) / 2) * child;
  let tab = beerp(duration) * adults;
  let tad = drinksp(duration) * adults + (drinksp(duration) / 2) * child;

  result.innerHTML = `<p>${tam / 1000} Kg de Carne &#127830</p>`;
  result.innerHTML += `<p>${Math.ceil(
    tab / 350
  )} Latas de Cerveja &#127867</p>`;
  result.innerHTML += `<p>${Math.ceil(
    tad / 2000
  )} Garras de Refrigerantes &#127863</p>`;
}

function meatp(duration) {
  if (duration >= 6) {
    return 650;
  } else {
    return 400;
  }
}
function beerp(duration) {
  if (duration >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}
function drinksp(duration) {
  if (duration >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}
