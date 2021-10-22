const express = require('express');
const app = express();
const sequelize = require('./database/db');
const Sale = require('./database/models/Sale')
const port = 5000;

app.post('/ventas', async (req, res) => {
    Sale.create({
        dni: 1020780797,
        name: "Cristian",
        email: "cjparra@gmail.com",
        tel:3005066429,
        address: "Carrera 18A 186-62",
        city: "Bogota"
    }).then(sale => {
        res.json(sale);
    })
});

app.listen(port, () => {
    console.log(`el backend esta corriendo por el puerto ${port}`);
    sequelize.sync().then(() => {
        console.log('Nos hemos conectado con la bd ');
    }).catch((error) => {
        console.log('Se ha producido un error en la conexion a la bd', error);
    });
});


