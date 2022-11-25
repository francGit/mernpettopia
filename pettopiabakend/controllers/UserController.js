const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require('../services/TokenGenerator'); 
const saltRounds = 10;
const salt = "MisionTic2022";

//EndPoint para crear usuario
const createUser = (req, res) => {
  const { body } = req;
  // const { firstname, lastname, email, password } = body
  const newUser = new User({
    firstname: body.firstname,
    lastname: body.lastname,
    email: body.email.toLowerCase(),
    password: body.password,
    phone:body.phone,
    dni:body.dni,
    address: body.address,
    country: body.country,
    city: body.city,
  });

  // opcion 1 con el async y await, no olvidar colocar async en la funcion
  // const result = await newUser.save();
  // console.log ( result )

  // opcion 2 guardando un usuario con el formato tipo promise
  // newUser.save()
  // .then( () => res.send( { message: 'Usuario guardado con éxito' } ) )
  // .catch( (err) => res.send( { message: err } ) )

  // opcion 3 guardando un usuario con el formato undefined
  // newUser.save();

  // opcion 4
  User.findOne({ email: newUser.email }, (err, userFinded) => {
    if (userFinded) {
      res.send({ message: "Usuario ya existe" });
    } else if (!userFinded) {
      //agregamos mayor nivel de seguridad al password
      const passwordToEncrypt = newUser.password + salt;

      //antes de guardar el usuario debemos encriptar el password
      bcrypt.hash(passwordToEncrypt, saltRounds, (err, hash) => {
        if (err) {
          res.send({ message: "Error del servidor: " + err });
        } else if (!hash) {
          res.send({ message: "Error al intentar encriptar el password" });
        } else {
          //asignamos el hash a la propiedad password del nuevo usuario
          newUser.password = hash;
          // opcion 4 guardando un usuario con el formato tipo callback
          newUser.save((err, userStored) => {
            if (userStored) {
              res.send({
                message: "Usuario creado con exito",
                status: 200
              });
            }
            if (err) {
              res.send({ message: "Error del servidor" });
            }
          });
        }
      });
    } else {
      res.send({ message: "Error del servidor: " + err });
    }
  });
};

//EndPoint para crear editar usuario
const editUser = (req, res) => {
  const idToUpdate = req.params.id;
  const { body } = req;
  const userToUpdate = {
    firstname: body.firstname,
    lastname: body.lastname,
    email: body.email.toLowerCase(),
    password: body.password,
    phone:body.phone,
    dni:body.dni,
    address: body.address,
    country: body.country,
    city: body.city,
  };

  User.findOne({ email: userToUpdate.email }, (err, userFinded) => {
    if (err) {
      res.send({ message: "Error del servidor: " + err });
    } else if (userFinded) {
      if (userFinded.id !== idToUpdate) {
        res.send({ message: "Email ya se encuentra en uso", user: userFinded });
      } else {
        User.findByIdAndUpdate(idToUpdate, userToUpdate, (err, userUpdated) => {
          if (userUpdated) {
            res.send({ message: "Usuario actualizado satisfactoriamente" });
          } else if (!userUpdated) {
            res.send({ message: "Usuario no existe" });
          } else {
            res.status(500).send({ message: `Error del servidor: ${err}` });
          }
        });
      }
    } else {
      User.findByIdAndUpdate(idToUpdate, userToUpdate, (err, userUpdated) => {
        if (userUpdated) {
          res.send({ message: "Usuario actualizado satisfactoriamente" });
        } else if (!userUpdated) {
          res.send({ message: "Usuario no existe" });
        } else {
          res.status(500).send({ message: `Error del servidor: ${err}` });
        }
      });
    }
  });
};
 
//EndPoint para eliminar usuario
const deleteUser = (req, res) => {
  const idToDelete = req.params.id;
  User.findByIdAndRemove({ _id: idToDelete }, (err, userDeleted) => {
    if (err) {
      res.send({ message: "Error del servidor: " + err });
    } else if (userDeleted) {
      res.send({ message: "Usuario elimando con exito" });
    } else {
      res.send({ message: "Usuario no encontrado " });
    }
  });
};

//EndPoint para obtener todos los usuarios
const getAllUsers = (req, res) => {
  User.find({}, (err, docs) => {
    if (err) {
      res.status(500).send({ message: `Error del servidor: ${err}` });
    } else if (!res) {
      res.send({ message: "Error de la BD" });
    } else {
      res.send({ docs });
    }
  });
};




//ToDo:...Falta funcion para loguear usuario
const userLogin = ( req, res ) => {
  //instrucciones para loguear usuario
  const { body } = req
  const { email , password } = body

  //verificamos si el usuario existe o no
  User.findOne( { email: email.toLowerCase() }, (err, userFinded) => {
    if(err){
      res.send( { message: 'Error del servidor: ' + err } )
    }else if(!userFinded){
      res.send( { message: 'Usuario o Password invalido' } )
    }else {
      //si el usuario fue encontrado verificamos que los password coincidan con la funcion compare de bcrypt
      const passwordToCompare = password + salt //agregamos el valor de salt al password que viene en el body

      bcrypt.compare( passwordToCompare , userFinded.password, (err, result) =>{
        if(err){
          res.send( { message: 'Error del servidor'})
        } else if(!result) {
          res.send ( { message: 'Usuario o Password invalido 2' } )
        } else {
          //creamos el token del usuario
          const token = jwt.createAccessToken(userFinded)
          res.send( { token } )
        }
      })

    }
  } )
}

module.exports = {
  createUser,
  editUser, 
  deleteUser,
  getAllUsers,
  userLogin,
};
