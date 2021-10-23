const express = require('express');
const saleController = require('./sale.controller');

const router = express.Router();

router
    .route('/ventas')
    .post(saleController.createSale)
    .delete(saleController.deleteSale);

router
    .route('/ventas/:dni')    
    .get(saleController.getSale)
    .put(saleController.updateSale);

module.exports = router;