const {Schema, model} = require('mongoose')

const ClienteSchema = ({
    idCliente:{
        type: Number,
        unique:true
    },
    nombre:{
        type: String,
        required:[true, 'El nombre es obligatorio']
    },
    direccion:{
        type: String,
        required:[true,'El precio de compra es obligatorio'] 
    },
    telefono:{
        type:Number,
        required :[true,'El precio de venta es obligatorio'] 
    },
    correo:{
        type: String,
        required:[true,'La cantidad es obligatoria'] 
    },
    estado:{
        type:String,
        required :[true,'El estado es obligatorio'] 
    }
})

//Exportar la funcion  UsuariosSchema
module.exports = model ('Cliente',ClienteSchema)