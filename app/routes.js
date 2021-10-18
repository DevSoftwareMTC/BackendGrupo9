const express = require('express');
const router = express.Router();

// Importar controladores
const ProductController = require('./controllers/ProductController');
const categoryController = require('./controllers/CategoryController')



// Products
router.post('/', ProductController.create);
router.get('/getByName/:name', ProductController.showByKeyWord);
router.get('/', ProductController.showAll);
router.get('/:id', ProductController.showById);
router.patch('/:id', ProductController.update);
router.delete('/:id', ProductController.delete);

//LOGIN










//USUARIOS








//VENTAS








//CATEGORIAS

router.post('/category', categoryController.create);
router.get('/category/read', categoryController.showAll);
router.get('/category/:id', categoryController.showByIdCat);
router.patch('/category/up/:id', categoryController.updateCategory);



module.exports = router;

