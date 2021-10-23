const {Product} = require('../models/index');
const {Category} = require('../models/Category');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {

    // // CREATE
    create(req, res) {
        console.log('req', req.body);
        Product.create(
            req.body
        ).then(product => {
            res.json(product);
        })
    },


    // INDEX /api/productos
    showByKeyWord(req, res) {
        Product.findAll({
            where: {
                //name: req.params.name

                name: {
                    [Op.like]: `%${req.params.name}%`
                }

            }
        }).then(productos => {
            res.json(productos);
        });
    },


    // INDEX /api/productos
    showAll(req, res) {
        console.log('entro');
        Product.findAll({ include: 'category' }).then(productos => {
            res.json(productos);
        })
    },


    // READ /api/posts/:id
    showById(req, res) {
        Product.findByPk(req.params.id , {include: 'category'}) .then(productos => {
            res.json(productos);
        })
    },

    // // UPDATE /api/posts/:id
    update(req, res) {

        Product.update({
            nombreProducto: req.body.nombreProducto,
            talla: req.body.talla,
            manufactura: req.body.manufactura,
            descripcionProducto: req.body.descripcionProducto,
            precio: req.body.precio,
            stock: req.body.stock,
            category_id: req.body.category_id
        }, {
            where: {
                id: req.params.id
            }
        }).then(result => {
            res.json(result);
        });

    },


    // DELETE /api/producto/:id
    delete(req, res) {
        Product.destroy({
            where: {
                id: req.params.id
            }
        }).then(result => {
            res.json(result);
        })
    },

    //MOSTRAR PRENDAS /api/getCategories

    showAllCategories(req, res) {
        console.log('entro');
        Category.findAll({attributes: ['name']})
        .then(prendas => {
            res.json(prendas);
        })
    }

}
