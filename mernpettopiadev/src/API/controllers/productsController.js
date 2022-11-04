const Products = require('../models/Products');
////actualizar cliente


////agregar producto
exports.add = async(req,res) =>{
    const product = Products(req.body);
    try {
        await product.save();
        res.json({message:'Nuevo producto agregado'})
    } catch (error) {
        if(error.code === 11000){
            res.status(400).json({
                message: `Ya existe un pruducto con el sku ${req.body.sku}`
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
    const products = await Products.find({});    
    res.json(products);
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
        const product = await Products.findById(req.params.id);
        if(!product){
            res.status(404).json({message:'El producto no existe'
        });
        }
        res.json(product);
    } catch (error) { 
        res.status(400).json({
            message:'Error al procesar la petición'
        });
    } 
}

///actualizar cliente

exports.update = async (req,res,next) => {
    try {
        const product = await Products.findOneAndUpdate(
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
        await Products.findOneAndDelete({ _id: req.params.id});
        res.json({message: 'El product fue eliminado'});
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la peticion'
        });
    }
}