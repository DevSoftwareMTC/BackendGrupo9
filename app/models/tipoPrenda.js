'use strict';
module.exports = (sequelize, DataTypes) => {
  const tipoPrenda = sequelize.define('tipoPrenda', {
    tipo: DataTypes.STRING
  }, {});
  tipoPrenda.associate = function(models) {
    // associations can be defined here
    tipoPrenda.hasMany(models.Product, { as: "tipo_Prenda", foreignKey: "prenda_id" });
  };
  return tipoPrenda;
};