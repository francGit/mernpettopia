// console.log('hello server');
const cors = require('cors');
const express = require('express');
const app = express();
const port = 3001;
const mongoose = require('mongoose');
////importar modelo user
const user = require('./models/UserModel')
const pet = require('./models/PetModel')
////router
const router = require('./routes/routes');
const { createUser, editUser, deleteUser, getAllUsers } = require('./controllers/UserControllers');
const { editPet, deletePet, getAllPets, createPet } = require('./controllers/PetControllers');
app.use(express.urlencoded({ extended:true}));
app.use(express.json());
////conexion ala base de datos

mongoose.connect('mongodb+srv://framunet:MdbFranc12*@merntopia.eubrb8n.mongodb.net/merntopia?retryWrites=true&w=majority');
////framunet
/////MdbFranc12*
/////famupinto@gmail.com
/////MongoPacho.g12

/////dominios permitidos

const dominiosPermitidos = [process.env.FRONTEND_URL];
const corsOption = {
    origin: function(origin, callback){
        if(dominiosPermitidos.indexOf(origin) !== 1){
            callback(null, true);
        }else{
            callback(new Error('No permitido por CORS'))
        }
    }
}


///zona usuarios
////metodo post
router.post('/createUser', createUser)
////metodo Editar usuario
router.put('/editUser/:id', editUser )
///eliminar usuario
router.delete('/deleteUser/:id', deleteUser)

///Obtener todos los usuarios
router.get('/getAllUsers', getAllUsers)

///////////////////
///zona pets

///post
router.post('/createPet', createPet)
////metodo put pet
router.put('/editPet/:id', editPet)
////metodo delete pet
router.delete('/deletePet/:id', deletePet)
////metodo get
router.get('/getAllPets', getAllPets )

       
app.use(cors(corsOption));
//////////////////////////
app.use(router)

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}` )
}) 