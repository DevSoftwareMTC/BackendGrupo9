const express = require('express');
const sequelize = require('./database/db');
const saleRoutes = require('./components/sale/sale.routes');

const app = express();
const router = express.Router();
const bp = require('body-parser')


app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
router.use(saleRoutes);
app.use(router);

app.listen(5000, () => {
    console.log(`el backend esta corriendo por el puerto ${5000}`);
    sequelize.sync().then(() => {
        console.log('Nos hemos conectado con la bd ');
    }).catch((error) => {
        console.log('Se ha producido un error en la conexion a la bd', error);
    });
});


