const express = require('express');
const router = express.Router();

// Importar controladores
const ProductController = require('../app/controllers/ProductController');

// Products
router.post('/', ProductController.create);
router.get('/getByName/:name', ProductController.showByKeyWord);
router.get('/', ProductController.sowAll);
router.get('/:id', ProductController.showById);
router.patch('/:id', ProductController.update);
router.delete('/:id', ProductController.delete);

//LOGIN










//USUARIOS








//VENTAS








//CATEGORIAS

module.exports = router;


