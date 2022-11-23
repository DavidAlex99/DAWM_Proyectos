  // fetch("https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=EUR")
  // .then(res => res.json())
  // .then(result => {
  //   for(let i = 0; i < result.coins.length; i++){
  //     console.log(result.coins);
  //     const markup = '<li>${result.coins[i].name}</li>';
  //     document.querySelector('ul').insertAdjacentHTML('beforeend', markup);

  //   }
  //   // result.coins.forEach(post => {
  //   //   console.log(post);
  //   //   const markup = '<li>${post}</li>';
  //   //   document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
  //   // });
    
  // })
  // .catch(error => console.log(error));


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
async function renderMonedas(){
  let users = await getMonedas();
  console.log(users);
  let html = '';
  users.forEach(user => {
    let htmlSegment = `<table>
                          <tr>
                            <th>Top</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Capitalizacion Mercado</th>
                          </tr>
                        </table>`;
    html += htmlSegment;
  });
  let container = document.getElementById('lista');
  container.innerHTML = html;
}


//funcion para ejecutarlo cuando se efectue el fitro y coger los 3 primeros elementos para ponerlo en el top
//en la etiqueta con la clase "carousel-bullet"
//PENDIENTE pasara paraetro segun el filtro que se quiere hacer
async function filtroMonedas(){
  let users = await getMonedas();

  //Creacion de contenedor para los logos
  let html = '';

  //primer for para iterar el json en estado normal
  for(let i=0; i < users.length; i++){
    for(let j=0; j < users.length; j++){
      if(users[i]."aqui va el filtro" > lista[j]."aqui va el filtro"){
        let auxiliar = users[i]."aqui va el filtro";
        users[i]."aqui va el filtro" = users[j]."aqui va el filtro";
        users[j]."aqui va el filtro" = auxiliar;
      }   
    }
  }

  //llamado de las etiquetas
  const topPunto = document.querySelectorAll(".carousel-bullet");

  //segundo for para iterar el array del top 3 y creacion de imagenes
  for(let k = 0; k < users.length; k++){
    topPunto[k].innerHTML = users[k]."aqui va el filtro";

    //creacion de una etiqueta img para ubicar en el contenedor de logos
    let imag = document.createElement('img');
    //la url se encuentra en el objeto image
    imag.src = users[k].image;
    html += imag;
  }
  //obetenr la etiqueta padre del html para alojar las imagenes
  document.getElementById("logosTop").innerHTML = html;
}
  

//PENDIENTE crear un eventlistener para el filtro y ejecutar su metodo
renderMonedas();
