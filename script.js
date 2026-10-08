function summerWeather(city, temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}
summerWeather('Москве', 15);
summerWeather('Лондоне', 13);

const SPEED_OF_LIGHT = 299792458;
function checkSpeed(speed) {
  if (speed > SPEED_OF_LIGHT) {
    console.log("Сверхсветовая скорость");
  } else if (speed < SPEED_OF_LIGHT)
  {
    console.log("Скорость света");
  }
}
checkSpeed(300000000);
checkSpeed(1000);
checkSpeed(299792458);

const productName = "Ноутбук";
const productPrice = 3000;
function buyProduct(budget) {
  if (budget >= productPrice) {
    console.log (`${productName} приобретен. Спасибо за покупку!`);
  } else {
    const difference = productPrice - budget;
    console.log(`Вам не хватает ${difference}$, пополните баланс`);
  }
}
buyProduct(3500);
buyProduct(3000);
buyProduct(2000);

function gamingСomputer () {
  console.log('Игровой компьютер')
}
gamingСomputer()

let name = "Муслим"
console.log(name)
let age = "15"
console.log(age)
let hobby = "sleep"
console.log(hobby)
