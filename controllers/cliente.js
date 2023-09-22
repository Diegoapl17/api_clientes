const { response } = require('express');

//importacion de los metodos 
const Cliente = require('../models/clientes');



//consultar para obtener los usuarios en una variable de tipo asincrona 
const clienteGet = async (req, res = response) => {
    // const {nombre} = req.query//desecstructuracion

    //consultar todos los uduarios
    const clientes = await Cliente.find(); //esto nos da una respuesta

    //convierte los usuarios en json 
    res.json({
        clientes
    })
}


const clientePost = async (req, res) => {
    let mensaje = 'Inserción Exitosa'
    const body = req.body //Captura de atributos
    try {
        const clientes = new Cliente(body) //Instanciando el objeto
        await clientes.save() //Inserta en la colección
    } catch (error) {
        mensaje = error
        console.log(error)
    }
    res.json({
        msg: mensaje
    })
}



//Modifcación
const clientePut = async (req, res = response) => {

    const { idCliente, nombre, direccion, telefono, correo, estado } = req.body
    let mensaje = 'Modificación exitosa'
    try {
        await Cliente.updateMany({ idCliente: idCliente },
            { $set: { nombre: nombre, direccion: direccion, telefono: telefono, correo: correo, estado: estado } })
    }
    catch (error) {
        mensaje = 'Se presentaron problemas en la modificación.'
    }

    res.json({
        msg: mensaje
    })
}

//Eliminación
const clienteDelete = async (req, res) => {

    const { _id } = req.body
    let mensaje = 'La eliminiación se efectuó exitosamente.'

    try {
        const cliente = await Cliente.deleteOne({ _id: _id })
    }
    catch (error) {
        mensaje = 'Se presentaron problemas en la eliminación.'
    }

    res.json({
        msg: mensaje
    })
}

module.exports = {
    clienteGet,
    clientePost,
    clientePut,
    clienteDelete
}
