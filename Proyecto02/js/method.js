  fetch("https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=EUR")
  .then(res => res.json())
  .then(result => {
    for(let i = 0; i < result.coins.length; i++){
      console.log(result.coins);
      const markup = '<li>${result.coins[i].name}</li>';
      document.querySelector('ul').insertAdjacentHTML('beforeend', markup);

    }
    // result.coins.forEach(post => {
    //   console.log(post);
    //   const markup = '<li>${post}</li>';
    //   document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
    // });
    
  })
  .catch(error => console.log(error));
  



