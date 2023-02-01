//ARCHIVO REST DE EMPLOYEES SOLO PARA PRUEBAS
var express = require('express');
var router = express.Router();

const { Sequelize, Op } = require('sequelize');
const Customers = require('../models').customers;
const Employees = require('../models').employees;  
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
    })  
    .then(employees => {  
        res.json(employees);  
    })  
    .catch(error => res.status(400).send(error)) 
  
  });

module.exports = router;