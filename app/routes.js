/* const express = require('express');
const router = express.Router();

// Importar controladores
const ProductController = require('./controllers/ProductController');

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

router.get('/getPrendas', ProductController.showAllPrendas);

module.exports = router; */


const express = require('express');
const router = express.Router();

// Importar controladores
const ProductController = require('./controllers/ProductController');

// Products
router.post('/', ProductController.create);
router.get('/getPrendas', ProductController.showAllPrendas);
router.get('/getByName/:name', ProductController.showByKeyWord);
router.get('/', ProductController.showAll);
router.get('/:id', ProductController.showById);
router.patch('/:id', ProductController.update);
router.delete('/:id', ProductController.delete);



module.exports = router;
