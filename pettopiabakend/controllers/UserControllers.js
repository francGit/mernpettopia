const user = require('../models/UserModel')
const bcrypt = require('bcrypt')
const saltRounds = 10; 
const createUser =  (req,res) => {
    const {body} = req;
    let newUser = new user({
        firstName: body.firstName,
        lastName: body.lastName,
        identification: body.identification,
        password:body.password,
        phone:body.phone,
        email: body.email,
        address:body.address,
        country:body.country,
        city:body.city
    })
    ///ToDo validar si el usuario existe
    user.findOne({email: newUser.email},(err,user) => {
        if(user){
            res.send({message:'Usuario ya existe'})
        }else{
            ///encriptamos el pass
            bcrypt.hash(newUser.password, saltRounds, (err, hash) =>{
               newUser.password = hash;
               newUser.save();
               res.status(200).send({message: 'Creado con exito'})
            })
        }
        if(err) return (`Error al crear usuario: ${err}`);
    })
}
const editUser = (req,res) =>{
    const idToFind = req.params.id
    const {body} = req;
    //objeto creado para ctualizar
    
    const usertToEdit = {
            firstName: body.firstName,
            lastName: body.lastName,
            identification: body.identification,
            password: body.password,
            phone: body.phone,
            email: body.email.toLowerCase(),
            address: body.address,
            country: body.country,
            city:body.city,
    }
    user.findByIdAndUpdate(idToFind,usertToEdit, (err,usuario) =>{
        if(usuario){
            res.send(
                `usuario editado correctamente: ${usuario.id} encontrado: \n ${usuario}`
            );
        }else{
            res.send('usuario no existe');
        }
        if(err) return 'Error al encontrar usuario';
    })
    
    }

const deleteUser = (req,res) =>{
    const idtoDelete = req.params.id;

    user.findOneAndRemove({_id:idtoDelete}, (err, userDeleted) => {
        if(err) return 'Error al eliminar usuario'; 
        if (userDeleted) {
            res.status(200).send(`Usario eliminado: ${userDeleted}`)
        } else {
            
        }
    })
}


const getAllUsers = (req,res) =>{
    user.find({}, (err, userCollection) =>{
        if(err) return 'Error al cargar coleccion';
        if (userCollection) {
            res.send(userCollection)
        } else {
            res.send('No existe coleccion')
        }
    })
}

module.exports = {
    createUser,
    editUser,
    deleteUser,
    getAllUsers
}