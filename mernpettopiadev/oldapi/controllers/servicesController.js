const Services = require('../models/Services');
////actualizar cliente


////agregar producto
exports.add = async(req,res) =>{
    const service = Services(req.body);
    try {
        await service.save();
        res.json({ message:'Nuevo servicio agregado' });
    } catch (error) {
        if(error.code === 11000){
            res.status(400).json({
                message: `Ya existe un servicio con el mismo nombre: ${req.body.name}`,
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
    const services = await Services.find({});    
    res.json(services);
 } catch (error) {
    res.status(400).json({
        message:'Error al procesar la petición'
    })
    // next();
 }

};


////leer product por id

exports.show = async(req,res, next) => {
    try {
        const service = await Services.findById(req.params.id);
        if(!service){
            res.status(404).json({message:'El servicio no existe'
        });
        }
        res.json(service);
    } catch (error) { 
        res.status(400).json({
            message:'Error al procesar la petición'
        });
    } 
}

///actualizar cliente

exports.update = async (req,res,next) => {
    try {
        // eslint-disable-next-line no-unused-vars
        const service = await Services.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true }
        );
        res.json({
            message: 'servicio actualizado correctamente'
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
        await Services.findOneAndDelete({ _id: req.params.id});
        res.json({message: 'El servicio fue eliminado'});
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la peticion'
        });
    }
}