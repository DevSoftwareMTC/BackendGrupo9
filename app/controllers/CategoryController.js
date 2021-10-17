const {Category} = require ('../models/index');
const Sequelize = require ('sequelize');
const category = require('../models/Category');
//const ProductController = require('./categoryController');
//const category = require('../models/category');
const Op = Sequelize.Op;

module.exports = {
 //CREATE

 create(req,res) {
    console.log('req', req.body);
    Category.create(
        req.body
    ).then(category => {
        res.json(category);
    })

 },
//mostrar categorias
// INDEX /api/productos
showAll(req, res) {
    console.log('entro a revisar categorias');
    Category.findAll().then(category => {
        res.json(category);
      
    })
},

/* CONSULTA ESPECIFICANDO EL NOMBRE DE LAS COLUMNAS
    sowAll(req, res) {
        console.log('entro a revisar categorias');
        Category.findAll({
             attributes:['id','name']

        }).then(category => {
            res.json(category);
        })
    },*/

    //MOSTRAR POR ID LA CATEGORIA
    showByIdCat(req, res) {
        Category.findByPk(req.params.id).then(category => {
            res.json(category);
        })
    },

    //UPDATE DEL NOMBRE
    // // UPDATE /api/posts/:id
    updateCategory(req, res) {
    // console.log(req);
     Category.update({
            name: req.body.name
        }, {
            where: {
                id: req.params.id
            }
        }).then(result => {
            res.json(result);
        });

    }
 

}