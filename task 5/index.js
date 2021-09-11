const width = 5;
const height = 5;
const divider = 1.8;

document.write("<pre>");

for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= width; j++) {
        if ((i > 1 && i < height) && (j > 1 && j < width)) {
            document.write(" ");
            continue;
        }
        document.write("*");     
    }
    document.write("<br/>");
}

document.write("</pre>");

document.write("<pre>");

for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= i; j++) {
        if (j == 1 || i == height || j == i) {
            document.write("*");
            continue;
        }
        document.write(" ");
    }
    document.write("<br/>");
}

document.write("</pre>");

document.write("<pre>");

for (let i = 0; i < Math.round(height/divider); i++) {
    for (let j = 1; j <= height; j++) {
        if ((j >= ((height + 1) / 2) - i) && j <= (((height + 1) / 2) + i)) {
            document.write("*");
            continue;
        }
        document.write(" ");
    }
    document.write("<br/>");
}

document.write("</pre>");

document.write("<pre>");

for (let i = 0; i < Math.round(height/divider); i++) {
    for (let j = 1; j <= height; j++) {
        if ((j >= ((height + 1) / 2) - i) && j <= (((height + 1) / 2) + i)) {
            document.write("*");
            continue;
        }
        document.write(" ");
    }
    document.write("<br/>");
}

for (let i = Math.round(height/divider); i > 1; i--) {
    for (let j = 0; j <= i; j++) {
        if ((j >= ((height + 1) / 2) - i + 1) && j <= (((height + 1) / 2) + i - 1)) {
            document.write("*");
            continue;
        }
        document.write(" ");
    }
    document.write("<br/>");
}


document.write("</pre>");
