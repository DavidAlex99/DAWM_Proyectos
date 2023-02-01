var express = require('express');
var router = express.Router();


//ESTOS CONTROLADORES SON GENERAL, ES DECIR QUE HAY INTERVENCION
//DE MODELOS

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//CONTROLADOR CUANDO SE APRETE LA SECCION EN FILTRO CLIENTE
//EN LA PANTALLA PRINCIPAL
router.get('/historialCliente', function(req, res, next){
  res.render('customers', { title: 'Clientes'})
});

module.exports = router;
