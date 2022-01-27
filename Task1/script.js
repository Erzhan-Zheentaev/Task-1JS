// 1. Простое сообщение: сохраните текстовое сообщение в переменной и выведите его в браузере
let textMessage = "Hello world!";
console.log(textMessage);

// 2. Простые сообщения: сохраните сообщение в переменной и выведите это сообщение. Затем замените значение переменной другим сообщением и выведите новое сообщение
let simpleMessage = "Lessons started";
console.log(simpleMessage);

simpleMessage = "We study JavaScript";
console.log(simpleMessage);

// 3. Напишите несколько строк кода, выводящих на экран ваше имя и почтовый адрес.
const myName = "Erzhan";
const myEmail = "erzhan.zheentaev.kk@gmail.com";

console.log(`My name is - ${myName}`);
console.log(`My email adress - ${myEmail}`);

// 4. Интернет-магазин занимается продажей различных сувениров и безделушек. Каждый сувенир весит 75 г, а безделушка – 112 г. Напишите программу, запрашивающую у пользователя количество тех и других покупок, после чего выведите на экран общий вес посылки.

const souvenirWeight = 75;
const baubleWeight = 112;

const souWeightSum = +prompt("How many souvenirs do you have?");
const baubWeightSum = +prompt("How many baible do you have?");

const sumBabuleSouvenir =
  souWeightSum * souvenirWeight + baubWeightSum * baubleWeight;
console.log(sumBabuleSouvenir);

// 5. Создайте программу, которая запрашивает у пользователя два целых числа **a** и **b**, после чего выводит на экран результаты следующих математических операций:

//     - сумма a и b;

//     - разница между a и b;

//     - произведение a и b;

//     - частное от деления a на b;

//     - остаток от деления a на b;

//     - результат возведения числа a в степень b

const a = +prompt(`Vvedite tseloye chislo '2'`);
const b = +prompt(`Vvedite tseloye chislo '3'`);

console.log("summa a and b: ${a + b}");
console.log("raznitsa mezhdu  a and b: ${a - b}");
console.log("proizvedenie a and b: ${a * b}");
console.log("chastnoye ot deleniya a and b: ${a / b}");
console.log("ostatok ot deleniya a and b: ${a % b}");
console.log("rezul'tat vozvedeniya chisla a and b: ${a ** b}");
