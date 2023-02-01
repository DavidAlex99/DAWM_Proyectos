//archivos ROUTES SOLO PARA PRUEBAS
var express = require('express');  
var router = express.Router();  
  

const { Sequelize,Op } = require('sequelize');
const Customers = require('../models').customers;  
//se importa otro modelo, ya que tiene una asociacion con este modelo
const Employees = require('../models').customers;
//se importa otro modelo, ya que tiene una asociacion con este modelo
const Offices = require('../models').offices;

router.get('/empOfCust/json', function(req, res, next) {  
  
    //EL ATRIUTOS CON EL QUE ASOCIAN EMPLOYEES Y OFFICES ES MEDIANTE officeCode
    Employees.findAll({  
        attributes: { exclude: ["updatedAt", "createdAt"] } ,
        include: [{
            //que del modelo Cuatomers se incluya
            model: Offices,
            attributes: ['city'],
            through: {attributes: []}
          }], 
        where: {
            officeCode: '1'
        },
        required: false
    })  
    .then(employees => {  
        res.json(employees);  
    })  
    .catch(error => res.status(400).send(error)) 
  
  });

router.get('/empOfCust/json', function(req, res, next) {  
  
    //EL ATRIUTOS CON EL QUE ASOCIAN EMPLOYEES Y OFFICES ES MEDIANTE officeCode
    Employees.findAll({  
        attributes: { exclude: ["updatedAt", "createdAt"] } ,
        include: [{
            //que del modelo Cuatomers se incluya
            model: Offices,
            attributes: ['city'],
            through: {attributes: []}
          }], 
        where: {
            officeCode: '1'
        },
        required: false
    })  
    .then(employees => {  
        res.json(employees);  
    })  
    .catch(error => res.status(400).send(error)) 
  
  });

module.exports = router;