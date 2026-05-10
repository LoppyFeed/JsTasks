// Задание 1.1
let userNumber = prompt("Введите число");

if (userNumber === null || userNumber.trim() === "" || isNaN(userNumber)) {
    console.log("Ошибка: введенная информация не является числом");
} else {
    let textNumber = userNumber.trim();

    if (textNumber[0] === "-") {
        textNumber = textNumber.slice(1);
    }

    textNumber = textNumber.replace(".", "");

    console.log("Количество цифр: " + textNumber.length);
    console.log("Первая цифра: " + textNumber[0]);
}

// Задание 1.2
let userString = prompt("Введите строку");

console.log("Каждый второй символ строки, начиная с последнего:");

if (userString === null) {
    userString = "";
}

for (let i = userString.length - 1; i >= 0; i = i - 2) {
    console.log(userString[i]);
}

// Задание 1.3
let numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers[i].length; j++) {
        sum = sum + numbers[i][j] * numbers[i][j];
    }
}

console.log("Сумма квадратов элементов массива: " + sum);
