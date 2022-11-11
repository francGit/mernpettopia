// console.log('hello server');

const express = require('express');
const app = express();
const port = 3001;
const mongoose = require('mongoose');
////importar modelo user
const user = require('./models/UserModel')
////router
const router = express.Router();
app.use(express.urlencoded({ extended:true}));
app.use(express.json());
////conexion ala base de datos
mongoose.connect('mongodb+srv://framunet:MdbFranc12*@merntopia.eubrb8n.mongodb.net/merntopia?retryWrites=true&w=majority');
////framunet
/////MdbFranc12*
/////famupinto@gmail.com
/////MongoPacho.g12

router.get('/', (req,res) => {
res.send('<div style="background: #45616e;color: #fff;font-family:sans-serif;min-height: 100vh;margin-left: -8px;margin-top: -8px;margin-right: -8px;margin-bottom: -8px;display: flex;justify-content: center;align-content: center;align-items: center;"> <h1>Ruta principal del Server</h1></div>')
})
///zona usuarios
////metodo post
router.post('/createUser', (req,res) => {
    let newUser = new user({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        identification: req.body.identification,
        password:req.body.password,
        phone:req.body.phone,
        email: req.body.email,
        address:req.body.address,
        country:req.body.country,
        city:req.body.city,
    })
    ///ToDo validar si el usuario existe
    user.findOne({email: newUser.email},(err,user) => {
        if(user){
            res.send('Usuario ya existe')
        }else{
            newUser.save()
            res.status(200).send(`Usuario creado con exito: ${newUser}`)
        }
    })
})
////metodo put
router.put('/editUser/:id',(req,res) =>{
const idToFind = req.params.id

} )

///zona pets
router.post('/createPet', (req,res) => {
    let newPet = new user({
        nameanimal:req.body.nameanimal,
        typeanimal:req.body.typeanimal,
        racetype:req.body.racetype,
        years:req.body.years,
        file:req.body.file,
        commit:req.body.commit,
        idUser:req.body.idUser
    })
    ///ToDo validar si el usuario existe
    user.findOne({nameanimal: newPet.nameanimal},(err,user) => {
        if(pet){
            res.send('La mascota ya existe')
        }else{
            newPet.save()
            res.status(200).send(`Peludo creado con éxito: ${newPet}`)
        }
    })

     
})

app.use(router)

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}` )
}) 