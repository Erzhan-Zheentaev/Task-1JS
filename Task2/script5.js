/*5. Составить скрипт, который запрашивает у пользователя ввести номер кредитной карты. Скрипт должен обработать полученный номер и показать на странице последние 4 цифры а остальные цифры карты должны заменены на *.
    
    **Пример: "Номер вашей карты: **********1245"** */

const userCard = prompt("Your card number? (16)");
document.write(
  `Your card number - ${userCard
    .slice(0, 0)
    .concat("************")}${userCard.slice(12, 16)}`
);
