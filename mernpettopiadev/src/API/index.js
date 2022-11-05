const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3400;
const routes = require('./routes');

mongoose.Promise = global.Promise;
mongoose.connect(
    'mongodb://localhost:27017/store-api', 
    {
        useNewUrlParser: true,
    }
);
////habilitar bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true}));

///habilitar cors
app.use(cors());

// app.get('/', function(req,res){
//     res.send('Hola mundo desde api nodejs ;');
// });

app.use('/', routes());

app.listen(port, () => {
    console.log('Servidor en ejecucion port:' + port);
})

