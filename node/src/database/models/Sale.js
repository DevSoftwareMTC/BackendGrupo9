const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db');

class Sale extends Model{}
Sale.init({
    dni:DataTypes.DOUBLE,
    name:DataTypes.STRING,
    email:DataTypes.STRING,
    tel:DataTypes.BIGINT(20),
    address:DataTypes.STRING,
    city:DataTypes.STRING
}, {
    sequelize,
    modelName: "Sale"
});

module.exports = Sale;