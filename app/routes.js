const express = require('express');
const router = express.Router();

// Importar controladores
const ProductController = require('./controllers/ProductController');
const categoryController = require('./controllers/CategoryController')



// Products
router.post('/product/', ProductController.create);
router.get('/product/getByName/:name', ProductController.showByKeyWord);
router.get('/product/', ProductController.showAll);
router.get('/product/:id', ProductController.showById);
router.patch('/product/:id', ProductController.update);
router.delete('/product/:id', ProductController.delete);

//LOGIN










//USUARIOS








//VENTAS








//CATEGORIAS

router.post('/category', categoryController.create);
router.get('/category/read', categoryController.showAll);
router.get('/category/:id', categoryController.showByIdCat);
router.patch('/category/up', categoryController.updateCategory);



module.exports = router;

