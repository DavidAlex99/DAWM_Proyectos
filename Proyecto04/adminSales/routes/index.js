var express = require('express');
const axios = require('axios')
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//////////////////////////////////////////////////
//LLAMADO DE CARGA DE CUSTOMERS al API MEDIANTE URL, cuando se esta dentro
//de la ruta CUSTOMERS (CONTROLADORE DE PRUEBA)
router.get('/customers', async function(req, res, next) {
  
  //CONTROLADOR 1 EN EL API ROUTES/CUSTOMERS.JS que me devueve todos los datos de FOTOS (sin novedad)
// NO HACE FALTA PONER ROUTES, YA QUE POR DEFAULT, YA SE SABE QUE
// ES ESA RUTA A CONSULTAR EN EL API
  const URL = 'http://localhost:4444/customers/findAll/json'
  const config = {
    proxy: {
      host: 'localhost',
      port: 4444
    }
  }
  const response = await axios.get(URL, config);

  // response.data.map( item => { item.url = 'http://localhost:4444/'+item.ruta.replace('public/','') } )
  console.log(response);
  //EL RESPONSE CONTIENE EL JSON 
  res.render('customers', { title: 'Customers', arrCustomers: response.data });
})
///////////////////////////////////////////////////

/////////////////////////////////////////////////////////
// LLAMADO DE CARGA DE CUSTOMERS ASOCIACION CON EMPLOYEES
// al API MEDIANTE URL, que se encuentra en la carpeta REST de ADMIN, 
// cuando se esta dentro (CONTROLADOR DE INTERES)
// de la ruta CUSTOMERS (CONTROLADORE DE PRUEBA)
// router.get('/customers', async function(req, res, next) {
  
//   //CONTROLADOR 1 EN EL API ROUTES/CUSTOMERS.JS
//   const URL = 'http://localhost:4444/rest/customers/custOfEmpl/json'
//   const config = {
//     proxy: {
//       host: 'localhost',
//       port: 4444
//     }
//   }
//   const response = await axios.get(URL, config);

//   // response.data.map( item => { item.url = 'http://localhost:4444/'+item.ruta.replace('public/','') } )
//   console.log(response);
//   //EL RESPONSE CONTIENE EL JSON QUW DEVUELVE EL CONTROLADOR DE API
//   res.render('customers', { title: 'Customers', arrCustomers: response.data });
// })
///////////////////////////////////////////////////////////////////


//RUTA QUE ME LLEVARA AL DOM
router.get('/customers/filtro', function(req, res, next) {    
  try{  
      // res.render('consultasODM', { title: 'Consultas', arrFotos: fotos });  
      res.render('consultaODM');  
  }
  catch(error){
    res.status(400).send(error)
  } 

});

module.exports = router;
