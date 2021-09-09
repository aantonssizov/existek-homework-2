let inputA, a;

do {
    inputA = prompt("Enter a number:");
    a = parseInt(inputA);
} while (isNaN(a));

let result = a;

do {
    if (result == 0)
    {
        break;
    } else if (result < 0)
    {
        console.error("Number is less than 0");
        throw new Error("Number is less than 0");
    }
    
    result *= --a;    
} while (a > 1);

alert(result);