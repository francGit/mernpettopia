const express = require('express');
const router = express.Router();

const customersController = require('../controllers/customersController');
const productsController = require('../controllers/productsController');
const petsController = require('../controllers/petsController');

module.exports = function(){
    // post: / customers
    router.post('/customers', customersController.add);
    //get: / customers
    router.get('/customers', customersController.list);
    //leer cliente get: //customer/:id
    router.get('/customers/:id', customersController.show);
    //put /customer/:id
    router.put('/customers/:id', customersController.update);
    //delete /customer/:id
    router.delete('/customers/:id', customersController.delete);

    /////rutas para productos
     // post: / products
    router.post('/products', productsController.add);
    //get: / products
    router.get('/products', productsController.list);
    //leer products get: //products/:id
    router.get('/products/:id', productsController.show);
    //put /products/:id
    router.put('/products/:id', productsController.update);
    //delete /products/:id
    router.delete('/products/:id', productsController.delete);


    ////pets

      //get: / products
      router.get('/pets', petsController.list);



    return router; 
}