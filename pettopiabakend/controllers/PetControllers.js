const pet = require('../models/PetModel')

const createPet = (req,res) => {
    let newPet = new pet({
        nameanimal:req.body.nameanimal,
        typeanimal:req.body.typeanimal,
        racetype:req.body.racetype,
        years:req.body.years,
        file:req.body.file,
        commit:req.body.commit,
        idUser:req.body.idUser
    })
    ///ToDo validar si el usuario existe
    pet.findOne({nameanimal: newPet.nameanimal},(err,pet) => {
        if(pet){
            res.send('La mascota ya existe')
        }else{
            newPet.save()
            res.status(200).send(`Peludo creado con éxito: ${newPet}`)
        }
    })
}

const editPet = (req,res) =>{
    const idToFind = req.params.id
    const {body} = req;
    //objeto creado para ctualizar
    
    const pettToEdit = {
        nameanimal:body.nameanimal,
        typeanimal:body.typeanimal,
        racetype:body.racetype,
        years:body.years,
        file:body.file,
        commit:body.commit,
        idUser:body.idUser
    }
    user.findByIdAndUpdate(idToFind,pettToEdit, (err,pet) =>{
        if(pet){
            res.send(
                `mascota editada correctamente: ${pet.id} encontrada: \n ${pet}`
            );
        }else{
            res.send('mascota no existe');
        }
        if(err) return 'Error al encontrar mascota';
    })
    
    }
const deletePet = (req,res) =>{
    const idtoDelete = req.params.id;

    pet.findOneAndRemove({_id:idtoDelete}, (err, petDeleted) => {
        if(err) return 'Error al eliminar usuario'; 
        if (petDeleted) {
            res.status(200).send(`Usario eliminado: ${petDeleted}`)
        } else {
            
        }
    })
}
const getAllPets = (req,res) =>{
    pet.find({}, (err, petCollection) =>{
        if(err) return 'Error al cargar coleccion';
        if (petCollection) {
            res.send(petCollection)
        } else {
            res.send('No existe coleccion')
        }
    })
}

module.exports = {
    createPet,
    editPet,
    deletePet,
    getAllPets
}