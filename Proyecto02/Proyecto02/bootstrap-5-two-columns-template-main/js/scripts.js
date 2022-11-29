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

  let tablaPrueba;
  tablaPrueba = `<table>
                      <tr>
                        <th>hola</th>
                        <th>mundo</th>
                        <th>estas</th>
                        <th>pio</th>
                      </tr>
                    `;
  document.getElementById("infoCripto").innerHTML += tablaPrueba;
  
  for(let i=0; i<100; i++){
    let cuerpoTable;
    cuerpoTable = `<tr>
                    <td>${users[i].id}</td>
                    <td>${users[i].name}</td>
                    <td>${users[i].current_price}</td>
                    <td>${users[i].market_cap}</td>
                    </tr><br>`;
    document.getElementById("infoCripto").innerHTML += cuerpoTable;
    if(i == 100){
      let finalTabla = `</table>`
      document.getElementById("infoCripto").innerHTML += finalTabla;
    }
  }
}
  
//PRUEBA PARA OBTENER EL VALOR DE LA LISTA DE OPCIONES

//EJECUTAR LA FUNCION PARA TOMAR EL NOMBRE DE LA LISTA MEDIANTE UN EVENT
document.addEventListener('DOMContentLoaded', () => {
  let btnGrafico1 = document.getElementById("buttonGrafico1");
  btnGrafico1.addEventListener('click', ()=> {
    console.log('click desde el btnGrafico1');
    getOption();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  let btnGrafico2 = document.getElementById("buttonGrafico2");
  btnGrafico2.addEventListener('click', ()=> {
    console.log('click desde el btnGrafico2');
    getOption();
  });
});

//TOMAMOS PRIMERO EL VALOR DE LA SELECCION DE LA LISTA
function getOption(){
  let valorLista = document.querySelector(".salida").innerHTML;
  console.log("esto es lo que tommaos por el js en la funcion getOption()")
  console.log(valorLista);
  filtroMonedas(valorLista);
  //AGREGADO
  //pasamos el valor (numerico) a la funcion getOption()
}

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

  for(let i=0; i < 100; i++){
    for(let j=0; j < 100; j++){
      var filtroValorN = Number(filtroValor);
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
  

  //obtener los tags de las imagenes
  let imagenes = document.getElementsByClassName("imagen");

  //segundo for para iterar el array del top 3 y creacion de imagenes
  let contador = 0;
  imagenes.forEach(imagen => {
    let imag = document.createElement('img');
    imag.src = users[contador].image;
    //solo se puede poner estilos INLINE
    imag.style.height = "100%";
    imag.style.width = "100%";
    imag.style.border = "5px";
    console.log(contador);
    console.log("ruta de imagenes");
    console.log(imag.src);
    imagen.appendChild(imag);
    contador ++;
  })
  console.log(contador);
  if(varOpcion == 1){
    tablaBorrador1(users);
  }
  if(varOpcion == 2){
    tablaBorrador2(users);
  }
}
//FIN DE LA FUNCION



function tablaBorrador4(users){
  //Para cojer la tabla completa y convertirlo en un chart
  let tablaCompleta1 = '';

  console.log("users en la funcion tablaBorrador1");
  console.log(users);
  let tablaBorrador1;
  tablaBorrador1 = `<table>
                      <tr>
                        <th>HOLA</th>
                        <th>MUNDO</th>
                        <th>ESTAS</th>
                        <th>PIO</th>
                      </tr>
                    `;
  document.getElementById("tablesBorrador1").innerHTML += tablaBorrador1;

  tablaCompleta1 += tablaBorrador1;

  for(let i=0; i<3; i++){
    let cuerpoTablaBorrador1 = `<tr>
                                  <td>${users[i].id}</td>
                                  <td>${users[i].name}</td>
                                  <td>${users[i].current_price}</td>
                                  <td>${users[i].market_cap}</td>
                                </tr><br>
                                `;
    document.getElementById("tablesBorrador1").innerHTML += cuerpoTablaBorrador1;

    tablaBorrador1 += cuerpoTablaBorrador1;

    if(i == 2){
      let finalTableBorrador1 = `</table>`;
      document.getElementById("tablesBorrador1").innerHTML += finalTableBorrador1;
    
      tablaBorrador1 += finalTableBorrador1;
    }
    
  }

  
  console.log(tablaBorrador1);
}

function tablaBorrador3(users){
  //Para cojer la tabla completa y convertirlo en un chart
  let tablaCompleta2 = '';

  console.log("users en la funcion tablaBorrador2");
  console.log(users);
  let tablaBorrador2;
  tablaBorrador2 = `<table>
                      <tr>
                        <th>HOLA</th>
                        <th>MUNDO</th>
                        <th>ESTAS</th>
                        <th>PIO</th>
                      </tr>
                    `;
  document.getElementById("tablesBorrador2").innerHTML += tablaBorrador2;
  
  tablaCompleta2 += tablaBorrador2;;
  
  for(let i=0; i<3; i++){
    let cuerpoTablaBorrador2 = `<tr>
                                  <td>${users[i].id}</td>
                                  <td>${users[i].name}</td>
                                  <td>${users[i].current_price}</td>
                                  <td>${users[i].market_cap}</td>
                                </tr><br>
                                `;
    document.getElementById("tablesBorrador2").innerHTML += cuerpoTablaBorrador2;
    
    tablaBorrador2 += cuerpoTablaBorrador2;
    
    if(i == 2){
      let finalTableBorrador2 = `</table>`
      document.getElementById("tablesBorrador2").innerHTML += finalTableBorrador2;
      
      tablaBorrador2 += finalTableBorrador2;
      
    }


    const contenedor = document.getElementById("infoCripto");
  
    
    tr = document.createElement("tr");
    td = document.createElement("td");
    let tdText = document.createTextNode(users[i].id);
    td.appendChild(tdText);
    tr.appendChild(td);
    
  }
  
  console.log(tablaBorrador2);
}

function tablaBorrador1(users){
  //Para cojer la tabla completa y convertirlo en un chart
  let contenedor = document.getElementById("tablesBorrador1");

  console.log("users en la funcion tablaBorrador1");
  console.log(users);

  //CABECERA DE LA TABLA
  const nuevoTable = document.createElement("table");
  nuevoTable.setAttribute("border", "1");
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
    
  nuevoTable.appendChild(tr);
  
  for(let i=0; i<3; i++){

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

    nuevoTable.appendChild(tr);

  }
  contenedor.appendChild(nuevoTable);
}

function tablaBorrador2(users){
  //Para cojer la tabla completa y convertirlo en un chart
  let contenedor = document.getElementById("tablesBorrador2");

  console.log("users en la funcion tablaBorrador2");
  console.log(users);

  //CABECERA DE LA TABLA
  const nuevoTable = document.createElement("table");
  nuevoTable.setAttribute("border", "1");
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
    
  nuevoTable.appendChild(tr);
  
  for(let i=0; i<3; i++){

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

    nuevoTable.appendChild(tr);

  }
  contenedor.appendChild(nuevoTable);

  //Y creamos los graficos estadisticos mama
  nuevoTable.classList.add("charts-css column");
  let contenedorGrafico = document.getElementById("graficoInterno1");
  contenedorGrafico.appendChild(nuevoTable);
}


    

//PENDIENTE crear un eventlistener para el filtro y ejecutar su metodo
window.onload = tablaMonedas;





  
  