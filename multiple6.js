let numberFirst = window.prompt('Введите число №1');
let numberSecond = window.prompt('Введите число №2');
let multipleNumbers = 0;
let sumNumbers = 0;

numberFirst = Number(numberFirst);
numberSecond = Number(numberSecond);

const numberMin = Math.min(numberFirst, numberSecond);
const numberMax = Math.max(numberFirst, numberSecond);

// console.log(`минимальное число: ${numberMin}`);
// console.log(`максимальное число: ${numberMax}`);

for ( let i = numberMin; i <= numberMax; i += 1) {
    
    if (i % 6 !== 0) {
        // console.log(`ne kratno 6: ${i}`);
        continue;   
    }
    // console.log(`kranto 6: ${i}`);
    sumNumbers += i;
    multipleNumbers += i / i;
}

console.log(`количество чисел кратых 6: ${multipleNumbers}, а их сума: ${sumNumbers}`);