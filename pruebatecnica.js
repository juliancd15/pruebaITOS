//
// Ejercicio 2: "determina si es bisiesto"
//

// let fecha;
// fecha = prompt("Ingresar un año. Ejemplo: 2022");
// fecha = parseInt(fecha);
// if((fecha%4==0) && (fecha%100 != 0 || fecha%400 == 0)){
//     document.write("El año digitado, es bisiesto")
// }else{
//     document.write("El año digitado, no es bisiesto" );
// }

//
//Ejercicio 3: "Tabla creada por el usuario: Filas x Columnas" 
//

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

//
//Ejercicio 4: "Arreglo que se llena con numeros aleatorios"
//

// let array = [20];

// for(i=0; i<19; i++) {
//     array.push(Math.floor(Math.random()*100));
// }
//     console.log("Sort inicial: " + array);
//     let Long = array.length;
    
//     for(let i=0; i < Long; i++){
//       for(let j=i+1; j < Long; j++){
//         var a = 0;
//         if(array[i]>array[j]){
//           a = array[i];  
//           array[i] = array[j];
//           array[j] = a
//         }  
//       }
//     }
      
//     console.log("Sort menor a mayor: " + array);

//
//Ejercicio 5: "conjuntos Union Interseccion Diferencia Simetria"
//


    // const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // let arrayA = [10];
    // let arrayB = [10];
    // let c = 0;
    // const num = characters.length;

    // for ( let i = 0; i < num; i++ ) {
    //     arrayA.push(characters.charAt(Math.random() * num));
    //     arrayB.push(characters.charAt(Math.random() * num)); 
        
    //     if(arrayA ){

    //     }     
    // }
    
    
    // console.log("Arreglo 1: " + arrayA);
    // console.log("Arreglo 2: " + arrayB);
    // console.log("Arreglo conjunto union: " + c);// un conjunto no puede tener elementos repetidos





    // const displayRandomString = () =>{
    //    let randomStringContainer = document.getElementById('random_string'); 
    //     randomStringContainer.innerHTML =  generateRandomString(8);    
    // }
    
    // console.log(generateRandomString(5));


    //Ejercicio 6 

//     var contenido = document.querySelector('#contenido');
//     function mostrar() {
//     fetch('https://www.banxico.org.mx/SieAPIRest/service/v1/series/:idSerie/datos/:fechaIni/:fechaFin',
//      headers= {
//        "Bxm-Token": "583f54603b39d0bb99bc7372ffad0e58bb47bdfbec3120ec0ca3049e4ace9b55", //Agregado
//        "idSerie":[["SP68257"],["SF43718"],["SF61745"]],
//        "fechaIni":"12/11/1991",
//        "fechaFin": "29/09/2015",
//      },
//      )
//     .then(r => r.json())
//     .then(data => {
//         (data)
//             console.log(data);
//             contenido.innerHTML = data.error.detalle
//     })
//    }
//    mostrar();