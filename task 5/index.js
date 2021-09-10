const width = 8;
const height = 8;

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

for (let i = 1, k = width; i <= height; i++) {
    for (let j = 1; j <= width; j++, k--) {
        if (i == height) {
            document.write("*");
            continue;
        }
        if (j > 1 && j < height) {
            document.write(" ");
        }
        if ((j == 1 || j == width) && i == height - 1) {
            document.write("*");
        }
        if (j == width/2 && i == 1) {
            document.write("*");
            break;
        }
        if ((i == height - k || k == height - i)) {
            document.write("*");
        }
    }
    k = width;
    document.write("<br/>");
}

document.write("</pre>");
