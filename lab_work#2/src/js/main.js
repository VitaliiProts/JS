var a = +prompt('Введіть вашу оцінку', '');
if (a <= 100 && a >= 95) {
  console.log('A');
} else if (a <= 94 && a >= 85){
  console.log('B');
} else if (a <= 84 && a >= 75) {
  console.log('C');
} else if (a <= 74 && a >= 65) {
  console.log('D');
} else if (a <= 64 && a >= 60) {
  console.log('E');
} else if (a <= 59 && a >= 0) {
  console.log('FX');
} else {
  console.log('Я не знаю такого значення');
}