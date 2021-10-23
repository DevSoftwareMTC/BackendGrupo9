const saleSchema = require('./sale.schema');
const saleServices = require('./sale.service') 


const createSale = ( req, res ) => {
    const { body } = req;
    const { error, _ } = saleSchema.createSchema.validate( body );
    if( error == undefined ){
        saleServices.createSale(body).then(sale => {
            res.status(201).json( sale );
        })
    } else {
        res.status(400).json({error: error.message})
    } 
}

const deleteSale = ( req, res ) => {
    const { params } = req;
    if( 'dni' in params && !isNaN( params.dni )){
        saleServices.deleteSale(params.dni).then(sale => {
            res.status(200).json( sale );
        })
    }else{
        res.status(400).json({error: "The sale could not be eliminated"})
    }
}

const updateSale = ( req, res ) => {
    const { body, params } = req;
    const { error, _ } = saleSchema.updateSchema.validate( body );

    if( error == undefined ){
        saleServices.updateSale( body, params.dni ).then(sale => {
            res.status(200).json( sale );
        }).catch(error => {
            res.status(400).json({error: error.message})
        })
    } else {
        res.status(400).json({error: error.message})
    }
}

const getSale = ( req, res ) => {
    const { params } = req;

    if( 'dni' in params && !isNaN( params.dni )){
        saleServices.getSale(params.dni).then(sale => {
            res.status(200).json( sale );
        }).catch(error => {
            res.status(404).json({error: error.message})
        })
    }else{
        res.status(400).json({error: "The dni is not correct"})
    }
}

module.exports = { createSale, deleteSale, updateSale, getSale };
