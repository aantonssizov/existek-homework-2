let inputA, inputB, a, b;

do {
    inputA = prompt("Enter a:");
    a = parseInt(inputA);
} while (isNaN(a));

do {
    inputB = prompt("Enter b:");
    b = parseInt(inputB);
} while (isNaN(b));

let result = (a + b < 4) ? 'Мало' : (a + b > 100) ? 'Багато' : 'В самий раз';

console.log(result);