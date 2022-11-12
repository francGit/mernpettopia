const Pets = require('../models/Pets');
////actualizar cliente


////agregar producto
exports.add = async(req,res) =>{
    const pet = Pets(req.body);
    try {
        await pet.save();
        res.json({message:'Nuevo pet agregado'})
    } catch (error) {
        if(error.code === 11000){
            res.status(400).json({
                message: `Ya existe un pet con el sku ${req.body.sku}`
            });
        }else{
            res.status(400).json({
                message:'error al procesar la peticion'
            })
        }
    }

};


///// list products

exports.list = async (req,res) => {
 try {
    const pets = await Pets.find({});    
    res.json(pets);
 } catch (error) {
    res.status(400).json({
        message:'Error al procesar la petición'
    });
    next();
 }

};


////leer product por id

exports.show = async(req,res, next) => {
    try {
        const pet = await Pets.findById(req.params.id);
        if(!pet){
            res.status(404).json({message:'El producto no existe'
        });
        }
        res.json(pet);
    } catch (error) { 
        res.status(400).json({
            message:'Error al procesar la petición'
        });
    } 
}

///actualizar cliente

exports.update = async (req,res,next) => {
    try {
        const pet = await Pets.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true }
        );
        res.json({
            message: 'product actualizado correctamente'
        });
    } catch (error) {
        res.status(400).json({
            message:'Error al procesar la petición'
        });
    }
}


///eliminar cliente
exports.delete = async(req,res,next) => {
    try {
        await Pets.findOneAndDelete({ _id: req.params.id});
        res.json({message: 'El product fue eliminado'});
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la peticion'
        });
    }
}