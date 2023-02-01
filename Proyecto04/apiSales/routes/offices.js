//archivos ROUTES SOLO PARA PRUEBAS
var express = require('express');  
var router = express.Router();  
  

const { Sequelize,Op } = require('sequelize');
const Customers = require('../models').customers;  
//se importa otro modelo, ya que tiene una asociacion con este modelo
const Employees = require('../models').customers;
//se importa otro modelo, ya que tiene una asociacion con este modelo
const Offices = require('../models').offices;

router.get('/emplOfOff/json', function(req, res, next) {  
  
    
    Offices.findAll({  
        attributes: { exclude: ["updatedAt", "createdAt"] } ,
        include: [{
            model: Employees,
            // attributes: ['customerName', 'customerNumber', 'employeeNumber', 'firstName', 'lastName'],
            attributes: ['email'],
            through: {attributes: []}
          }], 
          where: { 
            firstName: "Diane"
          },
        //   required: false
    })  
    .then(employees => {  
        res.json(employees);  
    })  
    .catch(error => res.status(400).send(error)) 
  
  });
    
  
  module.exports = router;
  