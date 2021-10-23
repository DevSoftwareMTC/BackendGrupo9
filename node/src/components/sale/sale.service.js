const Sale = require('./sale.entity');

const createSale = ( sale ) => {
    return Sale.create( sale );
}

const updateSale = async ( sale, dni_ ) => {
    const find = await Sale.findOne({ where:{ dni: dni_ }});

    if(find != null){
        return Sale.update( sale , {where: { dni: dni_ }});
    }else{
        throw new Error("Sale not updated");
    } 
}

const deleteSale = async ( dni ) => {
    return Sale.destroy({ where:{ dni }});
}

const getSale = async ( dni_ ) => {
    const findAll = await Sale.findAll({ where:{ dni: dni_ }});

    if(findAll.length > 0){
        return findAll
    }else{
        throw new Error("Sale not found");
    } 
}

const getAllSale = async () => {
    const findAll = await Sale.findAll();

    if(findAll.length > 0){
        return findAll
    }else{
        throw new Error("Sale not found");
    } 
}

module.exports = { createSale, updateSale, deleteSale, getSale, getAllSale };
