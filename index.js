const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const postRoutes = require('./routes/rutas');

//const connection = require('./DBConnection/connection');
// const mongoString = process.env.DATABASE_URL

const app = express();

app.use(express.json());
app.use('/api', postRoutes);  // Que agregue api a las rutas.
app.use(bodyParser.json());  // Esto nos permite aceptar datos en formato JSON.


// CONECCIÓN A LA BASE DE DATOS
mongoose.connect(process.env.MONGODB_URI).then(() => console.log('Conectado a mongodb'))
.catch((error) => console.error(error));


// Verifica conexión de prueba. 
app.get('/', (req, res)=> {
    res.send('Prueba 1 respuesta del servidor!!!')
})

// Variable de ambiente de node, toma el puerto que
// nos da el servicio, y si no el puerto que le hemos definido(9000). 
const port = process.env.PORT || 9000;  
app.listen(port, () => console.log('Listening on port ' + port))


