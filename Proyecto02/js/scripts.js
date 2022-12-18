async function getMonedas(){
  let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true';
  try{
    let res = await fetch(url);
    return await res.json();
  }catch(error){
    console.log(error);
  }
}
  
//funcion para poner las monedas al informacion, de forma nativa en una tabla de informacion
async function tablaMonedas(){
  let users = await getMonedas();
  console.log(users);

  let contenedor = document.getElementById("infoCripto")
  let nuevoTable = document.createElement("table");
  /* nombre id de la tabla */
  nuevoTable.id = "tablaPrueba";
  let tr = document.createElement("tr");
  let th = document.createElement("th");
  let thText = document.createTextNode("Top");
  th.appendChild(thText);
  tr.appendChild(th);

  th = document.createElement("th");
  thText = document.createTextNode("Nombre");
  th.appendChild(thText);
  tr.appendChild(th);
  
  th = document.createElement("th");
  thText = document.createTextNode("Precio");
  th.appendChild(thText);
  tr.appendChild(th);
  
  th = document.createElement("th");
  thText = document.createTextNode("Capitalizacion Mercado");
  th.appendChild(thText);
  tr.appendChild(th);

  th = document.createElement("th");
  thText = document.createTextNode("Cambio Capitalizacion 24h");
  th.appendChild(thText);
  tr.appendChild(th);

  th = document.createElement("th");
  thText = document.createTextNode("Cambio Capitalizacion Porcentaje 24h");
  th.appendChild(thText);
  tr.appendChild(th);

  th = document.createElement("th");
  thText = document.createTextNode("Cambio Precio 24h");
  th.appendChild(thText);
  tr.appendChild(th);

  th = document.createElement("th");
  thText = document.createTextNode("Cambio Precio Porcentaje 24h");
  th.appendChild(thText);
  tr.appendChild(th);
    
  nuevoTable.appendChild(tr);

  for(let i=0; i<100; i++){
    tr = document.createElement("tr");
    let td = document.createElement("td");
    let tdText = document.createTextNode(users[i].id);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    tdText = document.createTextNode(users[i].name);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    tdText = document.createTextNode(users[i].current_price);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    tdText = document.createTextNode(users[i].market_cap);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    tdText = document.createTextNode(users[i].market_cap_change_24h);
    td.appendChild(tdText);
    tr.appendChild(td)
    
    td = document.createElement("td");
    tdText = document.createTextNode(users[i].market_cap_change_percentage_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    tdText = document.createTextNode(users[i].price_change_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    tdText = document.createTextNode(users[i].price_change_percentage_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    nuevoTable.appendChild(tr);
  }
  contenedor.appendChild(nuevoTable)
}
  
//PRUEBA PARA OBTENER EL VALOR DE LA LISTA DE OPCIONES

//EJECUTAR LA FUNCION PARA TOMAR EL NOMBRE DE LA LISTA MEDIANTE UN EVENT
document.addEventListener('DOMContentLoaded', () => {
  let btnGrafico1 = document.getElementById("buttonGrafico1");
  btnGrafico1.addEventListener('click', ()=> {
    console.log('click desde el btnGrafico1');
    getOption1();
    //borra el contenido de los contenedores
    let contenedorGrafico2 = document.getElementById("graficoInterno2");
    let contenedorGrafico1 = document.getElementById("graficoInterno1");
    let contendorImagenes = document.getElementsByClassName("imagen"); 
  });
});

document.addEventListener('DOMContentLoaded', () => {
  let btnGrafico2 = document.getElementById("buttonGrafico2");
  btnGrafico2.addEventListener('click', ()=> {
    console.log('click desde el btnGrafico2');
    getOption2();
    // //borra el contenido de los contenedores
    // let contenedorGrafico2 = document.getElementById("graficoInterno2").innerHTML = "";
    // let contenedorGrafico1 = document.getElementById("graficoInterno1").innerHTML = "";
    // let contendorImagenes1 = document.getElementsByClassName("imagen1").innerHTML = ""; 
    // let contendorImagenes2 = document.getElementsByClassName("imagen2").innerHTML = "";
  });
});

//TOMAMOS PRIMERO EL VALOR DE LA SELECCION DE LA LISTA
function getOption1(){
  let valorLista = document.querySelector("#salida1").innerHTML;
  //VARIABLE PARA IDENTIFICAR A GETOPTION1()
  const varOpcion1 = 1;
  console.log("esto es lo que tommaos por el js en la funcion getOption1()")
  console.log(valorLista);
  console.log("valor de la opcion dentro de getOption1()");
  console.log(varOpcion1);
  filtroMonedas(varOpcion1, valorLista);
  //AGREGADO
  //pasamos el valor (numerico) a la funcion getOption()
}

//TOMAMOS PRIMERO EL VALOR DE LA SELECCION DE LA LISTA
function getOption2(){
  let valorLista = document.querySelector("#salida2").innerHTML;
  //VARIABLE PARA IDENTIFICAR A GETOPTION2()
  const varOpcion2 = 2;
  console.log("esto es lo que tommaos por el js en la funcion getOption2()")
  console.log(valorLista);
  console.log("valor de la opcion dentro de getOption2()");
  console.log(varOpcion2);

  
  filtroMonedas(varOpcion2, valorLista);
  
  //AGREGADO
  //pasamos el valor (numerico) a la funcion getOption()
}

  //funcion para ejecutarlo cuando se efectue el fitro y coger los 3 primeros elementos para ponerlo en el top
  //en la etiqueta con la clase "carousel-bullet"
  //PENDIENTE pasara paraetro segun el filtro que se quiere hacer
async function filtroMonedas(varOpcion, filtroValor){
  console.log("valor del filtro en el metodo filtroMonedas");
  console.log(filtroValor);
  console.log("fin valor del filtro en el metodo filtroMonedas");

  console.log("valor del varOpcion en el metodo filtroMonedas");
  console.log(varOpcion);
  console.log("fin valor del varOpcion en el metodo filtroMonedas");

  let users = await getMonedas();
  //Creacion de contenedor para los logos
  let html = '';
  console.log("valor del array en el metodo filtroMonedas");
  console.log(users);
  console.log("fin valor del array en el metodo filtroMonedas");

  let nombre = "name";
  let filtroValorN = Number(filtroValor);
  for(let i=0; i < 100; i++){
    for(let j=0; j < 100; j++){    
      switch(filtroValorN){
        case 1:
        let tablaBorrador;
          if(users[i].name > users[j].name){
            let auxiliar = users[i].name;
            users[i].name = users[j].name;
            users[j].name = auxiliar;
          } 
          break;
        case 2:
          if(users[i].market_cap > users[j].market_cap){
            let auxiliar = users[i].market_cap;
            users[i].market_cap = users[j].market_cap;
            users[j].market_cap = auxiliar;
          }
          break;
        case 3:
          if(users[i].price_change_24h > users[j].price_change_24h){
            let auxiliar = users[i].price_change_24h;
            users[i].price_change_24h = users[j].price_change_24h;
            users[j].price_change_24h = auxiliar;
          }
          break;
        case 4:
          if(users[i].market_cap_change_percentage_24h > users[j].market_cap_change_percentage_24h){
            let auxiliar = users[i].market_cap_change_percentage_24h;
            users[i].market_cap_change_percentage_24h = users[j].market_cap_change_percentage_24h;
            users[j].market_cap_change_percentage_24h = auxiliar;
          }
          break;
      } 
    }
  }
  //hasta aqui en teoria los elementos en el array users debe estar ordenado
  console.log("Array ya ordenado");
  console.log(users);
  let varOpcionN = Number(varOpcion);
  
  if(varOpcionN == 1){
    tablaBorrador1(users, filtroValorN);
    //obtener los tags de las imagenes
    let imagenes = document.getElementsByClassName("imagen1");

    //segundo for para iterar el array del top 3 y creacion de imagenes
    let contador = 5;

    imagenes.forEach(imagen => {
      let imag = document.createElement('img');
      imag.src = users[contador].image;
      //solo se puede poner estilos INLINE
      imag.style.height = "100%";
      imag.style.width = "100%";
      imag.style.border = "5px";
      imag.id = `imagOpcion1_${contador}`;
      console.log("id de la imagen");
      console.log(imag.id);
      imag.className = "fadeIn";
      imag.href = "css/animation.css";
      console.log(contador);
      console.log("ruta de imagenes");
      console.log(imag.src);
      imagen.appendChild(imag);
      contador ++;
    })
  console.log(contador);
  }
  if(varOpcionN == 2){
    tablaBorrador2(users, filtroValorN);
    //obtener los tags de las imagenes
    let imagenes = document.getElementsByClassName("imagen2");

    //segundo for para iterar el array del top 3 y creacion de imagenes
    let contador = 2;
    imagenes.forEach(imagen => {
      let imag = document.createElement('img');
      imag.src = users[contador].image;
      //solo se puede poner estilos INLINE
      imag.style.height = "100%";
      imag.style.width = "100%";
      imag.style.border = "5px";
      imag.id = `imagOpcion2_${contador}`;
      console.log("id de la imagen");
      console.log(imag.id);
      imag.className = "slideUp";
      imag.href = "css/animation.css";
      console.log(contador);
      console.log("ruta de imagenes");
      console.log(imag.src);
      imagen.appendChild(imag);
      contador ++;
    })
  // console.log(contador);
  // let containerImagenPrueba = document.getElementById("imagenPrueba");
  // let imagenPrueba = document.createElement('img');
  // imagenPrueba.src = users[5].image;
  // imagenPrueba.style.height = "100%";
  // imagenPrueba.style.width = "100%";
  // imagenPrueba.style.border = "5px";
  // containerImagenPrueba.appendChild(imagenPrueba);
  }
}
//FIN DE LA FUNCION


function tablaBorrador1(users, filtroValor){
  

  console.log("users en la funcion tablaBorrador1");
  console.log(users);
  let filtroValorN = Number(filtroValor);
  //1 CUNADO LA OPCION ES POR market_cap_change_percentage_24h
  if(filtroValorN == 1){
    //Para cojer la tabla completa y convertirlo en un chart
    let contenedor = document.getElementById("graficoInterno1");
    const nuevoTable = document.createElement("table");
    //nuevoTable.classList.add("charts-css column");
    //Definicion de nombre de la clase
    nuevoTable.id = "my-chart";
    nuevoTable.className = "charts-css column multiple";
    //Defincion de la referencia a
    nuevoTable.href = "dist/charts.min.css";
    //nuevoTable.setAttribute("border", "1");
    let tbody = document.createElement("tbody");
    let tr;
    console.log("opcion 1 de tbalBorradoe2");
    

    tr = document.createElement("tr");
    let td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 0.67 / 10 )");
    let tdText = document.createTextNode(users[5].market_cap_change_percentage_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 2.64 / 10 )");
    tdText = document.createTextNode(users[6].market_cap_change_percentage_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 3.48 / 10 )");
    tdText = document.createTextNode(users[7].market_cap_change_percentage_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 1.11 / 10 )");
    tdText = document.createTextNode(users[8].market_cap_change_percentage_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 3.78 / 10 )");
    tdText = document.createTextNode(users[9].market_cap_change_percentage_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 2.55 / 10 )");
    tdText = document.createTextNode(users[10].market_cap_change_percentage_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 5.63 / 10 )");
    tdText = document.createTextNode(users[11].market_cap_change_percentage_24h);
    td.appendChild(tdText);
    tr.appendChild(td)
    tbody.appendChild(tr);

    nuevoTable.appendChild(tbody);

    contenedor.appendChild(nuevoTable);
  }

  //2 CUNADO LA OPCION ES POR price_change_24
  if(filtroValorN == 2){
    //Para cojer la tabla completa y convertirlo en un chart
    let contenedor = document.getElementById("graficoInterno1");
    const nuevoTable = document.createElement("table");
    //nuevoTable.classList.add("charts-css column");
    //Definicion de nombre de la clase
    nuevoTable.id = "my-chart";
    nuevoTable.className = "charts-css column multiple";
    //Defincion de la referencia a
    nuevoTable.href = "dist/charts.min.css";
    //nuevoTable.setAttribute("border", "1");
    let tbody = document.createElement("tbody");
    let tr;
    

    tr = document.createElement("tr");
    let td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 0.0004 / 1 )");
    let tdText = document.createTextNode(users[5].price_change_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 0.0098 / 1 )");
    tdText = document.createTextNode(users[6].price_change_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 0.0029 / 1 )");
    tdText = document.createTextNode(users[7].price_change_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 0.0033 / 1 )");
    tdText = document.createTextNode(users[8].price_change_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 0.0307 / 1 )");
    tdText = document.createTextNode(users[9].price_change_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 0.1357 / 1 )");
    tdText = document.createTextNode(users[10].price_change_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 1 / 1 )");
    tdText = document.createTextNode(users[11].price_change_24h);
    td.appendChild(tdText);
    tr.appendChild(td)
    tbody.appendChild(tr);

    nuevoTable.appendChild(tbody);
    
    contenedor.appendChild(nuevoTable);
  }

  //3 CUNADO LA OPCION ES POR market_cap_change_percentage_24h
  if(filtroValorN == 3){
    //Para cojer la tabla completa y convertirlo en un chart
    let contenedor = document.getElementById("graficoInterno1");
    const nuevoTable = document.createElement("table");
    //nuevoTable.classList.add("charts-css column");
    //Definicion de nombre de la clase
    nuevoTable.id = "my-chart";
    nuevoTable.className = "charts-css column multiple";
    //Defincion de la referencia a
    nuevoTable.href = "dist/charts.min.css";
    //nuevoTable.setAttribute("border", "1");
    let tbody = document.createElement("tbody");
    let tr;
    

    tr = document.createElement("tr");
    let td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 1.05 / 6 )");
    let tdText = document.createTextNode(users[5].market_cap_change_percentage_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 2.64 / 6 )");
    tdText = document.createTextNode(users[6].market_cap_change_percentage_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 3.48 / 6 )");
    tdText = document.createTextNode(users[7].market_cap_change_percentage_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 1.11 / 6 )");
    tdText = document.createTextNode(users[8].market_cap_change_percentage_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 3.48 / 6 )");
    tdText = document.createTextNode(users[9].market_cap_change_percentage_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 2.37 / 6 )");
    tdText = document.createTextNode(users[10].market_cap_change_percentage_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 5.63 / 6 )");
    tdText = document.createTextNode(users[11].market_cap_change_percentage_24h);
    td.appendChild(tdText);
    tr.appendChild(td)
    tbody.appendChild(tr);

    nuevoTable.appendChild(tbody);
    
    contenedor.appendChild(nuevoTable);
  }

  //4 CUNADO LA OPCION ES POR market_cap_change_24h
  if(filtroValorN == 4){
    //Para cojer la tabla completa y convertirlo en un chart
    let contenedor = document.getElementById("graficoInterno1");
    const nuevoTable = document.createElement("table");
    //nuevoTable.classList.add("charts-css column");
    //Definicion de nombre de la clase
    nuevoTable.id = "my-chart";
    nuevoTable.className = "charts-css column multiple";
    //Defincion de la referencia a
    nuevoTable.href = "dist/charts.min.css";
    //nuevoTable.setAttribute("border", "1");
    let tbody = document.createElement("tbody");
    let tr;
    

    tr = document.createElement("tr");
    let td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 237083720 / 600000000 )");
    let tdText = document.createTextNode(users[5].market_cap_change_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 525982682 / 600000000 )");
    tdText = document.createTextNode(users[6].market_cap_change_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 493134633 / 600000000 )");
    tdText = document.createTextNode(users[7].market_cap_change_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 122274283 / 600000000 )");
    tdText = document.createTextNode(users[8].market_cap_change_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 260522968 / 600000000 )");
    tdText = document.createTextNode(users[9].market_cap_change_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 147483138 / 600000000 )");
    tdText = document.createTextNode(users[10].market_cap_change_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 320254381 / 600000000 )");
    tdText = document.createTextNode(users[11].market_cap_change_24h);
    td.appendChild(tdText);
    tr.appendChild(td)
    tbody.appendChild(tr);

    nuevoTable.appendChild(tbody);
    
    contenedor.appendChild(nuevoTable);
  }
  //let contenedorGrafico = document.getElementById("graficoInterno1");
  //contenedorGrafico.appendChild(nuevoTable);
}

function tablaBorrador2(users, filtroValor){
  console.log("users en la funcion tablaBorrador1");
  console.log(users);
  let filtroValorN = Number(filtroValor);
  //1 CUNADO LA OPCION ES POR market_cap_change_percentage_24h
  if(filtroValorN == 1){
    console.log("opcion 1 de tbalBorradoe2");
    //Para cojer la tabla completa y convertirlo en un chart
    let contenedor = document.getElementById("graficoInterno2");
    const nuevoTable = document.createElement("table");
    //nuevoTable.classList.add("charts-css column");
    //Definicion de nombre de la clase
    nuevoTable.id = "my-chart";
    nuevoTable.className = "charts-css column multiple";
    //Defincion de la referencia a
    nuevoTable.href = "dist/charts.min.css";
    //nuevoTable.setAttribute("border", "1");
    let tbody = document.createElement("tbody");
    let tr;
    

    tr = document.createElement("tr");
    let td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 3.22173 / 5 )");
    let tdText = document.createTextNode(users[93].market_cap_change_percentage_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 1.47513 / 5 )");
    tdText = document.createTextNode(users[94].market_cap_change_percentage_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 2.05673 / 5 )");
    tdText = document.createTextNode(users[95].market_cap_change_percentage_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 0.59854 / 5 )");
    tdText = document.createTextNode(users[96].market_cap_change_percentage_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 4.60563 / 5 )");
    tdText = document.createTextNode(users[97].market_cap_change_percentage_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 3.60317 / 5 )");
    tdText = document.createTextNode(users[98].market_cap_change_percentage_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 0.35911 / 5 )");
    tdText = document.createTextNode(users[99].market_cap_change_percentage_24h);
    td.appendChild(tdText);
    tr.appendChild(td)
    tbody.appendChild(tr);

    nuevoTable.appendChild(tbody);

    contenedor.appendChild(nuevoTable);

  }

  //2 CUNADO LA OPCION ES POR price_change_24
  if(filtroValorN == 2){
    console.log("opcion 2 de tbalBorradoe2");
    //Para cojer la tabla completa y convertirlo en un chart
    let contenedor = document.getElementById("graficoInterno2");
    const nuevoTable = document.createElement("table");
    //nuevoTable.classList.add("charts-css column");
    //Definicion de nombre de la clase
    nuevoTable.id = "my-chart";
    nuevoTable.className = "charts-css column multiple";
    //Defincion de la referencia a
    nuevoTable.href = "dist/charts.min.css";
    //nuevoTable.setAttribute("border", "1");
    let tbody = document.createElement("tbody");
    let tr;
    

    tr = document.createElement("tr");
    let td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 0.00740575 / 0.05 )");
    let tdText = document.createTextNode(users[93].price_change_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 0.00319877 / 0.05 )");
    tdText = document.createTextNode(users[94].price_change_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 0.00043678 / 0.05 )");
    tdText = document.createTextNode(users[95].price_change_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 0.02926934 / 0.05 )");
    tdText = document.createTextNode(users[96].price_change_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 0.01350675 / 0.05 )");
    tdText = document.createTextNode(users[97].price_change_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 0.00698359 / 0.05 )");
    tdText = document.createTextNode(users[98].price_change_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 0.015377 / 0.05 )");
    tdText = document.createTextNode(users[99].price_change_24h);
    td.appendChild(tdText);
    tr.appendChild(td)
    tbody.appendChild(tr);

    nuevoTable.appendChild(tbody);
    
    contenedor.appendChild(nuevoTable);
  }

  //3 CUNADO LA OPCION ES POR market_cap_change_percentage_24h
  if(filtroValorN == 3){
    console.log("opcion 3 de tbalBorradoe2");
    //Para cojer la tabla completa y convertirlo en un chart
    let contenedor = document.getElementById("graficoInterno2");
    const nuevoTable = document.createElement("table");
    //nuevoTable.classList.add("charts-css column");
    //Definicion de nombre de la clase
    nuevoTable.id = "my-chart";
    nuevoTable.className = "charts-css column multiple";
    //Defincion de la referencia a
    nuevoTable.href = "dist/charts.min.css";
    //nuevoTable.setAttribute("border", "1");
    let tbody = document.createElement("tbody");
    let tr;
    

    tr = document.createElement("tr");
    let td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 3.255 / 5 )");
    let tdText = document.createTextNode(users[93].market_cap_change_percentage_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 1.233 / 5 )");
    tdText = document.createTextNode(users[94].market_cap_change_percentage_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 1.881 / 5 )");
    tdText = document.createTextNode(users[95].market_cap_change_percentage_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 0.175 / 5 )");
    tdText = document.createTextNode(users[96].market_cap_change_percentage_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 4.427 / 5 )");
    tdText = document.createTextNode(users[97].market_cap_change_percentage_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 0.598 / 5 )");
    tdText = document.createTextNode(users[98].market_cap_change_percentage_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 3.282 / 5 )");
    tdText = document.createTextNode(users[99].market_cap_change_percentage_24h);
    td.appendChild(tdText);
    tr.appendChild(td)
    tbody.appendChild(tr);

    nuevoTable.appendChild(tbody);
    
    contenedor.appendChild(nuevoTable);
  }

  //4 CUNADO LA OPCION ES POR market_cap_change_24h
  if(filtroValorN == 4){
    console.log("opcion 4 de tbalBorradoe2");
    //Para cojer la tabla completa y convertirlo en un chart
    let contenedor = document.getElementById("graficoInterno2");
    const nuevoTable = document.createElement("table");
    //nuevoTable.classList.add("charts-css column");
    //Definicion de nombre de la clase
    nuevoTable.id = "my-chart";
    nuevoTable.className = "charts-css column multiple";
    //Defincion de la referencia a
    nuevoTable.href = "dist/charts.min.css";
    //nuevoTable.setAttribute("border", "1");
    let tbody = document.createElement("tbody");
    let tr;
    

    tr = document.createElement("tr");
    let td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 10971587 / 11000000 )");
    let tdText = document.createTextNode(users[93].market_cap_change_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 5057631 / 11000000 )");
    tdText = document.createTextNode(users[94].market_cap_change_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 6937050 / 11000000 )");
    tdText = document.createTextNode(users[95].market_cap_change_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 2028804 / 11000000 )");
    tdText = document.createTextNode(users[96].market_cap_change_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 10661148 / 11000000 )");
    tdText = document.createTextNode(users[97].market_cap_change_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 10579672 / 11000000 )");
    tdText = document.createTextNode(users[98].market_cap_change_24h);
    td.appendChild(tdText);
    tr.appendChild(td)

    td = document.createElement("td");
    td.setAttribute("style",
                    "--size: calc( 1198597 / 11000000 )");
    tdText = document.createTextNode(users[99].market_cap_change_24h);
    td.appendChild(tdText);
    tr.appendChild(td)
    tbody.appendChild(tr);

    nuevoTable.appendChild(tbody);
    
    contenedor.appendChild(nuevoTable);
  }

  //let contenedorGrafico = document.getElementById("graficoInterno1");
  //contenedorGrafico.appendChild(nuevoTable);
}




    

//PENDIENTE crear un eventlistener para el filtro y ejecutar su metodo
window.onload = tablaMonedas;





  
  