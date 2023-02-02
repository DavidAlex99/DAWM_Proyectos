var express = require('express');
var router = express.Router();

const { Sequelize, Op } = require('sequelize');
const Customers = require('../models').customers; 
const Employees = require('../models').employees; 

//controlador para mostrar la info json de forma nativa en en navegador
//o tambine para pasar el json a la ruta que esta llamando a este enrutador
router.get('/findAll/json', function(req, res, next) {  

    Customers.findAll({  
        attributes: { exclude: ["city"] }   
    })  
    .then(customers => {  
        //vista del API (este directorio)
        res.json(customers);  
    })  
    .catch(error => res.status(400).send(error)) 
  
});

//controlador para mostrar la info  en la vista CUSTOMER.EJS
router.get('/findAll/view', function(req, res, next) {  

    Customers.findAll({  
        attributes: { exclude: ["city"] }   
    })  
    .then(customers => {  
        //vista del API (este directorio)
        //Tambien se pasa el array customers
        res.render('customers', { title: 'Customers', arrCustomers: customers });  
    })  
    .catch(error => res.status(400).send(error)) 
  
});

//controlador para hacer el filtro de customers con los employees
router.get('/customersWithEmployee/view', function(req, res, next) {  

    Customers.findAll({  
        //se esta excluyendo que se incluya el atributo CITY en este INNERJOIN entre CUSTOMERS y EMPLOYEES
        attributes: { exclude: ["city"] },
        //dentro de este include se pone los atributos que van a aparecer del modelo que se esta inclutendo
        //que en este caso esel modelo EMPLOYEES
        include: [{
            model: Employees,
            required:true,
            // attributes: ['customerName', 'customerNumber', 'employeeNumber', 'firstName', 'lastName'],
            attributes: ['firstName, lastName'],
            through: {attributes: []}
        }],
        //y estos atributos del modelo que hace referencia al metodo FINDALL, que en este caso es CUSTOMERS
        attributes: ['contactFirstName', 'contactLastName'],
    })  
    .then(customEmplo => {  
        //vista del API (este directorio), que esel de customers
        //Tambien se pasa el array customers el cual ya se encuentra filtrado con los atributos
        res.render('custWithEmplo', { title: 'Customer-Employees', arrCustEmpl: customEmplo });  
    })  
    .catch(error => res.status(400).send(error)) 
  
});

module.exports = router;