var express = require('express');  
var router = express.Router();  
  

const { Sequelize,Op } = require('sequelize');
const Customers = require('../../apiSales/models').customers;  
//se importa otro modelo, ya que tiene una asociacion con este modelo
const Employees = require('../../apiSales/models').customers;
  
//controlador para que nos devuelva todo
router.get('/findAll/json', function(req, res, next) {  

    Customers.findAll({  
        attributes: { exclude: ["city"] }   
    })  
    .then(customers => {  
        res.json(customers);  
    })  
    .catch(error => res.status(400).send(error)) 
  
});

// CONTROLADOR 1
//ciontrolador el cual actuara para la visualizacion de archivos
router.get('/findAll/json', function(req, res, next) {  

    Customers.findAll({  
        attributes: { exclude: ["city"] }    
    })  
    .then(customers => {  
        //Se trasnmite un array de los customers, y se renderiza la vista customers.ejs
        // res.render('customers', { title: 'Customers', arrCustomers: customers });
        //reciclamos el array para sacar a todos los clientes  
        res.json(customers);  
      })  
    .catch(error => res.status(400).send(error)) 
  
});

//CONTROLADOR DE PRUEBA PARA QUE ME VISUALIZE ÈNTRE UN RANGO DE CUSTMERNUMBERS
router.get('/findAllByNumber/json', function(req, res, next){

    //INTERVALOS DE LOS CUSTOMERSNUMBERS
    let lower = parseFloat(req.query.lower);
    let higher = parseFloat(req.query.higher);

    Customers.findAll({
        attributes: { exclude: ["updatedAt"] } ,
        include: [{
          model: Employees,
          attributes: ['salesRepEmployeeNumber'],
          through: {attributes: []}
        }], 
        where: { 
          calificacion: { 
            [Op.between]: [lower, higher]
          }
        }
      })  
      .then(customers => {  
        res.json(customers);  
      })  
      .catch(error => res.status(400).send(error)) 

})
  

  

module.exports = router;