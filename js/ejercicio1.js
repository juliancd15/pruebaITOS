let fecha;
fecha = prompt("Ingresar un año. Ejemplo: 2022");
fecha = parseInt(fecha);
if((fecha%4==0) && (fecha%100 != 0 || fecha%400 == 0)){
    document.write("El año digitado, es bisiesto")
}else{
    document.write("El año digitado, no es bisiesto" );
}