'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    nombreProducto: DataTypes.STRING,
    talla: DataTypes.STRING(3),
    manufactura: DataTypes.STRING,
    descripcionProducto: DataTypes.TEXT,
    precio: DataTypes.FLOAT,
    stock: DataTypes.INTEGER
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  //  Product.belongsTo(models.tipoPrenda, { as: "tipo_Prenda", foreignKey: "prenda_id" });
     Product.belongsTo(models.Category, { as: "category", foreignKey: "category_id" });
  };
  return Product;
};