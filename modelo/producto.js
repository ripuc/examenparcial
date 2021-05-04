const {Schema, model} = require('mongoose');

const ProductoSchema = Schema({

    categoria:{
        type:String,
        require:true
    },
    decripcion:{
        type:String,
        require:true
    },
    modelo:{
        type:String,
        require:true
    },
    marca:{
        type:String,
        require:true
    },
     precio:{
        type:Number,
        require:true
     }
        
    });
    ProductoSchema.method('toJSON', function(){
        const{__v, ...object}=this.toObject();
        return object
    });
    module.exports = model('Producto',ProductoSchema);