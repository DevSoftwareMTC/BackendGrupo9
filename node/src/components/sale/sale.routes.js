const express = require('express');
const saleController = require('./sale.controller');

const router = express.Router();

router
    .route('/ventas')
    .post(saleController.createSale)

router
    .route('/ventas/:dni')    
    .get(saleController.getSale)
    .put(saleController.updateSale)
    .delete(saleController.deleteSale);

router
    .route('/allventas')
    .get(saleController.getAllSale);

module.exports = router;