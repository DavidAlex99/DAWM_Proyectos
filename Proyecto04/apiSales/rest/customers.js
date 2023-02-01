var express = require('express');
var router = express.Router();

const { Sequelize, Op } = require('sequelize');
const Customers = require('../models').customers;
const Employees = require('../models').employees;  

//PARA QUE ME DEVUELVAN LOS DATOS UNIDOS POR ASOCIACION
//ESTA RUTA LA PUEDO EJECUTAR DESDE EL PUERTO DE API, O LO PUEDO 
//LLAMAR DESDE UN ROUTER EN ADMIN
router.get('/custOfEmpl/json', function(req, res, next) {  
  
    //
    Customers.findAll({  
        attributes: { exclude: ["updatedAt", "createdAt"] } ,
        include: [{
            model: Employees,
            // attributes: ['customerName', 'customerNumber', 'employeeNumber', 'firstName', 'lastName'],
            attributes: ['firstNumber'],
            through: {attributes: []}
          }], 
    })  
    .then(customers => {  
        res.json(customers);  
    })  
    .catch(error => res.status(400).send(error)) 
  
  });

module.exports = router;