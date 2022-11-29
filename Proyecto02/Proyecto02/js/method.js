


async function getMonedas(){
  let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true';
  try{
    let res = await fetch(url);
    //console.log(res.json())
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
  
  //adjuncion en el elemento del html
  contenedor.appendChild(nuevoTable);

}


//funcion para ejecutarlo cuando se efectue el fitro y coger los 3 primeros elementos para ponerlo en el top
//en la etiqueta con la clase "carousel-bullet"
//PENDIENTE pasara paraetro segun el filtro que se quiere hacer
// async function filtroMonedas(){
//   let users = await getMonedas();

//   //Creacion de contenedor para los logos
//   let html = '';

//   //primer for para iterar el json en estado normal
//   for(let i=0; i < users.length; i++){
//     for(let j=0; j < users.length; j++){
//       if(users[i]."aqui va el filtro" > lista[j]."aqui va el filtro"){
//         let auxiliar = users[i]."aqui va el filtro";
//         users[i]."aqui va el filtro" = users[j]."aqui va el filtro";
//         users[j]."aqui va el filtro" = auxiliar;
//       }   
//     }
//   }

//   //llamado de las etiquetas
//   const topPunto = document.querySelectorAll(".carousel-bullet");

//   //segundo for para iterar el array del top 3 y creacion de imagenes
//   for(let k = 0; k < users.length; k++){
//     topPunto[k].innerHTML = users[k]."aqui va el filtro";

//     //creacion de una etiqueta img para ubicar en el contenedor de logos
//     let imag = document.createElement('img');
//     //la url se encuentra en el objeto image
//     imag.src = users[k].image;
//     html += imag;
//   }
//   //obetenr la etiqueta padre del html para alojar las imagenes
//   document.getElementById("logosTop").innerHTML = html;
// }
  

//PENDIENTE crear un eventlistener para el filtro y ejecutar su metodo
window.onload = tablaMonedas;
