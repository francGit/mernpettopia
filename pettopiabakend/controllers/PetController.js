const Pet = require("../models/PetModel");

//EndPoint para crear usuario
const createPet = (req, res) => {
  const { body } = req;
  // const { firstname, lastname, email, password } = body
  const newPet = new Pet({
    nameanimal: body.nameanimal,
    typeanimal: body.typeanimal,
    racetype: body.racetype,
    years: body.years,
    file: body.file,
    commit: body.commit,
    userId: body.userId,
  });

  // opcion 4
  Pet.findOne({ nameanimal: newPet.nameanimal }, (err, petFinded) => {
    if (petFinded) {
      res.send({ message: "Mascota ya existe" });
    } else if (!petFinded) {
      //antes de guardar el usuario debemos encriptar el password
      if (err) {
        res.send({ message: "Error del servidor: " + err });
      } else {
        //asignamos el hash a la propiedad password del nuevo usuario

        // opcion 4 guardando un usuario con el formato tipo callback
        newPet.save((err, petStored) => {
          if (petStored) {
            res.send({
              message: "Mascota creada con exito",
              status: 200,
            });
          }
          if (err) {
            res.send({ message: "Error del servidor" });
          }
        });
      }
    } else {
      res.send({ message: "Error del servidor: " + err });
    }
  });
};

//EndPoint para crear editar usuario
const editPet = (req, res) => {
  const idToUpdate = req.params.id;
  const { body } = req;
  const petToUpdate = {
    nameanimal: body.nameanimal,
    typeanimal: body.typeanimal,
    racetype: body.racetype,
    years: body.years,
    file: body.file,
    commit: body.commit,
  };

  Pet.findOne({ nameanimal: petToUpdate.email }, (err, petFinded) => {
    if (err) {
      res.send({ message: "Error del servidor: " + err });
    } else if (petFinded) {
      if (petFinded.id !== idToUpdate) {
        res.send({ message: "Nombre ya se encuentra en uso", pet: petFinded });
      } else {
        Pet.findByIdAndUpdate(idToUpdate, petToUpdate, (err, petUpdated) => {
          if (petUpdated) {
            res.send({ message: "Pet actualizado satisfactoriamente" });
          } else if (!petUpdated) {
            res.send({ message: "Pet no existe" });
          } else {
            res.status(500).send({ message: `Error del servidor: ${err}` });
          }
        });
      }
    } else {
      Pet.findByIdAndUpdate(idToUpdate, petToUpdate, (err, petUpdated) => {
        if (petUpdated) {
          res.send({ message: "Pet actualizado satisfactoriamente" });
        } else if (!petUpdated) {
          res.send({ message: "Pet no existe" });
        } else {
          res.status(500).send({ message: `Error del servidor: ${err}` });
        }
      });
    }
  });
};

//EndPoint para eliminar usuario
const deletePet = (req, res) => {
  const idToDelete = req.params.id;
  Pet.findByIdAndRemove({ _id: idToDelete }, (err, petDeleted) => {
    if (err) {
      res.send({ message: "Error del servidor: " + err });
    } else if (petDeleted) {
      res.send({ message: "Pet elimando con exito" });
    } else {
      res.send({ message: "Pet no encontrado " });
    }
  });
};

//EndPoint para obtener todos los usuarios
const getAllPets = (req, res) => {
  Pet.find({}, (err, pets) => {
    if (err) {
      res.status(500).send({ message: `Error del servidor: ${err}` });
    } else if (!res) {
      res.send({ message: "Error de la BD" });
    } else {
      res.send({ pets });
    }
  });
};
const getPet = (req, res) => {
  Pet.findById(req.params.id, (err, pets) => {
    if (err) {
      res.status(500).send({ message: `Error del servidor: ${err}` });
    } else if (!res) {
      res.send({ message: "Error de la BD" });
    } else {
      res.send({ pets });
    }
  });
};

module.exports = {
  createPet,
  editPet,
  deletePet,
  getAllPets,
  getPet,
};
