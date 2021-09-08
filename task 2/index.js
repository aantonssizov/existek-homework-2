const color_to_guess = "red";

let input;
let i = 1;

console.log("Вгадайте колір за 5 спроб");

while (i <= 5) {
    console.log(i);
    input = prompt("Enter color you think is right:");
    if (input == color_to_guess)
    {
        console.log(`Вітаємо ви вгадали із ${i} спроби`);
        break;
    } else if (i == 5) {
        console.log("Ви не вгадали");
        break;
    }
    i++;
}
