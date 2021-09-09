let isGoing = true;

while (isGoing) {
    let move = prompt('Куди прямуєш - r/l/t/b');
    
    switch (move) {
        case "r":
            console.log("на право");
            break;
        case "l":
            console.log("на ліво");
            break;
        case "t":
            console.log("вниз");
            break;
        case "b":
            console.log("вверх");
            break;
        default:
            console.log("Маршрут складено");
            isGoing = false;
            break;
    }
}