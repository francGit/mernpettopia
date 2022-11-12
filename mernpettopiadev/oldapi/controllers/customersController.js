const Customers = require('../models/Customers');
////actualizar cliente


////agregar clientes
exports.add = async(req,res) =>{
    const customer = Customers(req.body);
    try {
        await customer.save();
        res.json({message:'Nuevo cliente agregado'})
    } catch (error) {
        console.log(error)
        res.json(error);
        next();
    }
};


/////primera accion: list

exports.list = async (req,res) => {
 try {
    const customers = await Customers.find({});    
    res.json(customers);
 } catch (error) {
    console.log(error)
    res.json(error);
    next();
 }

};


////leer cliente por id

exports.show = async(req,res, next) => {
    try {
        const customer = await Customers.findById(req.params.id);
        if(!customer){
            res.status(404).json({message:'El cliente no existe'
        });
        }
        res.json(customer);
    } catch (error) { 
        res.status(400).json({
            message:'Error al procesar la petición'
        });
    } 
}

///actualizar cliente

exports.update = async (req,res,next) => {
    try {
        const customer = await Customers.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true }
        );
        res.json({
            message: 'cliente actualizado correctamente'
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
        await Customers.findOneAndDelete({ _id: req.params.id});
        res.json({message: 'El cliente fue eliminado'});
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la peticion'
        });
    }
}