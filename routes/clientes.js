const {Router} = require('express')//desecstructuracion extraer un atributo de un objeto 

const route = Router()

//importar metodos del controlador
const {clienteGet, clientePost, clientePut, clienteDelete} = require('../controllers/cliente')

route.get('/', clienteGet)
route.post('/', clientePost)
route.put('/', clientePut)
route.delete('/', clienteDelete)

module.exports = route