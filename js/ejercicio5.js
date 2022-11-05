var contenido = document.querySelector('#contenido');
    function mostrar() {
    fetch('https://www.banxico.org.mx/SieAPIRest/service/v1/series/SF43718',
     headers= {
        "idSerie": "SF43718",
        "titulo": "Tipo de cambio Pesos por dólar E.U.A. Tipo de cambio para solventar obligaciones denominadas en moneda extranjera Fecha de determinación (FIX)",
        "fechaInicio": "12/11/1991",
        "fechaFin": "29/09/2015",
        "periodicidad": "Diaria",
        "cifra": "Tipo de Cambio",
        "unidad": "Pesos por Dólar"
      },
     )
    .then(r => r.json())
    .then(data => {
        (data)
            console.log(data);
            contenido.innerHTML = data.error.detalle
    })
   }
   mostrar();
