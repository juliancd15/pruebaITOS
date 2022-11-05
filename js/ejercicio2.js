var f, c;

var filas = Number(prompt("Digite el numero de filas: "));
var columnas = Number(prompt("Digite el numero de columnas: "));

document.write("<table border>");

for(f=0;f < filas; f++) {
    document.write("<tr>");
    for(c = 0; c < columnas; c++) {
        document.write("<td>");
        document.write(0);
        document.write("</td>");
    }
    document.write("</tr>");
}

document.write("</table>");