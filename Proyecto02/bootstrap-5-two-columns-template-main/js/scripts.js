async function getMonedas(){
    let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true';
    try{
      let res = await fetch(url);
      return await res.json();
    }catch(error){
      console.log(error);
    }
  }
  
  //funcion para poner las monedas al informacion, de forma
  //nativa en una tabla de informacion
  async function tablaMonedas(){
    let users = await getMonedas();
    console.log(users);
  
    // const contenedor = document.getElementById("infoCripto");
  
    // const nuevoTable = document.createElement("table");
  
    // nuevoTable.setAttribute("border", "1");
  
    // let tr = document.createElement("tr");
  
    // let th = document.createElement("th");
    // let thText = document.createTextNode("Top");
    // th.appendChild(thText);
    // tr.appendChild(th);
  
    // th = document.createElement("th");
    // thText = document.createTextNode("Nombre");
    // th.appendChild(thText);
    // tr.appendChild(th);
  
    // th = document.createElement("th");
    // thText = document.createTextNode("Precio");
    // th.appendChild(thText);
    // tr.appendChild(th);
  
    // th = document.createElement("th");
    // thText = document.createTextNode("Capitalizacion Mercado");
    // th.appendChild(thText);
    // tr.appendChild(th);
    
    //adjuncion en la tabla que se creo
    //nuevoTable.appendChild(tr);
  
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


//TOMAMOS PRIMERO EL VALOR DE LA SELECCION DE LA LISTA
function getOption(){
  let valorLista = document.querySelector(".salida").innerHTML;
  console.log("esto es lo que tommaos por el js en la funcion getOption()")
  console.log(valorLista);
  filtroMonedas(valorLista);
}






  //funcion para ejecutarlo cuando se efectue el fitro y coger los 3 primeros elementos para ponerlo en el top
  //en la etiqueta con la clase "carousel-bullet"
  //PENDIENTE pasara paraetro segun el filtro que se quiere hacer
async function filtroMonedas(filtroValor){
  console.log("valor del filtro en el metodo filtroMonedas");
  console.log(filtroValor);
  console.log("fin valor del filtro en el metodo filtroMonedas");

  let users = await getMonedas();
  //Creacion de contenedor para los logos
  let html = '';
  console.log("valor del array en el metodo filtroMonedas");
  console.log(users);
  console.log("fin valor del array en el metodo filtroMonedas");

  let nombre = "name";
  //ARRAY para elementos ya ordenados
  
  //primer for para iterar el json en estado normal
  // for(let i=0; i < 100; i++){
  //   for(let j=0; j < 100; j++){
  //     var filtroValorN = Number(filtroValor);
  //     if(users[i].filtroValor > users[j].filtroValor){
  //       console.log("valor del primer for en el metodo filtroMonedas");
  //       console.log(users[i].filtroValor);
  //       console.log("fin valor del primer for en el metodo filtroMonedas");
  //       let auxiliar = users[i].filtroValor;
  //       users[i].filtroValor = users[j].filtroValor;
  //       users[j].filtroValor = auxiliar;
  //     }   
  //   }
  // }
    
  for(let i=0; i < 100; i++){
    for(let j=0; j < 100; j++){
      // console.log("valor del filtro en el primer for");
      // console.log(filtroValor);
      // console.log("fin valor del filtro en el primer  for");
      //conversion de la variable a un numero
      var filtroValorN = Number(filtroValor);
      switch(filtroValorN){
        case 1:
          if(users[i].name > users[j].name){
            // console.log("valor del primer for en el metodo filtroMonedas");
            // console.log(users[i].name);
            // console.log("fin valor del primer for en el metodo filtroMonedas");
            let auxiliar = users[i].name;
            users[i].name = users[j].name;
            users[j].name = auxiliar;
          } 
          break;
        case 2:
          if(users[i].market_cap > users[j].market_cap){
            // console.log("valor del primer for en el metodo filtroMonedas");
            // console.log(users[i].market_cap);
            // console.log("fin valor del primer for en el metodo filtroMonedas");
            let auxiliar = users[i].market_cap;
            users[i].market_cap = users[j].market_cap;
            users[j].market_cap = auxiliar;
          }
          break;
        case 3:
          if(users[i].price_change_24h > users[j].price_change_24h){
            // console.log("valor del primer for en el metodo filtroMonedas");
            // console.log(users[i].price_change_24h);
            // console.log("fin valor del primer for en el metodo filtroMonedas");
            let auxiliar = users[i].price_change_24h;
            users[i].price_change_24h = users[j].price_change_24h;
            users[j].price_change_24h = auxiliar;
          }
          break;
        case 4:
          if(users[i].market_cap_change_percentage_24h > users[j].market_cap_change_percentage_24h){
            // console.log("valor del primer for en el metodo filtroMonedas");
            // console.log(users[i].market_cap_change_percentage_24h);
            // console.log("fin valor del primer for en el metodo filtroMonedas");
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
  let htmlImg;
  //obtener los tags de las imagenes
  let imagenes = document.querySelectorAll(".imagen")
  //segundo for para iterar el array del top 3 y creacion de imagenes
  let contador = 1;
  console.log(imagenes);
  imagenes.forEach(imagen => {
    let imag = document.createElement('img');
    imag.src = users[contador].image;
    console.log("ruta de imagenes");
    console.log(imag.src);
    imagen.appendChild(imag);
  })
    // // //creacion de una etiqueta img para ubicar en el contenedor de logos
    // let imag = document.createElement('img');
    // //la url se encuentra en el objeto image
    // imag.src = users[k].image;
    // console.log("ruta de imagenes");
    // console.log(imag.src);
    // //Obteniendo conetenedores de imagenes
    // document.getElementById("imagen+()").appendChild(imag);
    
    // htmlImg = `<img src="${users[k].image}"></img>`
    // console.log("ruta imagen");
    // console.log(users[k].image);
    // imagenes[k].innerHTML += htmlImg;
  
}
    

//PENDIENTE crear un eventlistener para el filtro y ejecutar su metodo
window.onload = tablaMonedas;

//EJECUTAR LA FUNCION PARA TOMAR EL NOMBRE DE LA LISTA MEDIANTE UN EVENT
document.addEventListener('DOMContentLoaded', () => {
  let btn = document.getElementById("buttonLista");
  btn.addEventListener('click', ()=> {
    console.log('click desde el js');
    getOption();
  });
});


  //PENDIENTE crear un eventlistener para el filtro y ejecutar su metodo
  
  