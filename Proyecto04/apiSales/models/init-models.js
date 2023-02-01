var DataTypes = require("sequelize").DataTypes;
var _customers = require("./customers");
var _employees = require("./employees");
var _offices = require("./offices");

function initModels(sequelize) {
  var customers = _customers(sequelize, DataTypes);
  var employees = _employees(sequelize, DataTypes);
  var offices = _offices(sequelize, DataTypes);

  //EN ESTE CASO NO HAY TABLA INTERMEDIA
  //La primera línea establece la relación uno-a-muchos entre clientes y empleados, 
  //donde un empleado es el representante de ventas para uno o más clientes.
  customers.belongsTo(employees, { as: "salesRepEmployeeNumber_employee", foreignKey: "salesRepEmployeeNumber"});
  //La segunda línea establece la relación opuesta, muchos-a-uno, entre clientes y empleados.
  employees.hasMany(customers, { as: "customers", foreignKey: "salesRepEmployeeNumber"});
  //La tercera y cuarta línea establecen la relación uno-a-muchos y 
  //muchos-a-uno entre empleados y sus superiores.
  employees.belongsTo(employees, { as: "reportsTo_employee", foreignKey: "reportsTo"});
  employees.hasMany(employees, { as: "employees", foreignKey: "reportsTo"});
  //La quinta y sexta línea establecen la relación uno-a-muchos y muchos-a-uno entre empleados y oficinas.
  employees.belongsTo(offices, { as: "officeCode_office", foreignKey: "officeCode"});
  offices.hasMany(employees, { as: "employees", foreignKey: "officeCode"});

  return {
    customers,
    employees,
    offices,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
