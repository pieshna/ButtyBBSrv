import { Router } from 'express'
import {
  createCliente,
  deleteCliente,
  getCliente,
  getClienteByNit,
  getClientes,
  updateCliente
} from './cliente.controller'
import { validateSchema } from '../components/middleware/schema'
import { clienteSchema } from './cliente.schema'

const router = Router()

router.get('/', getClientes)
router.get('/:id', getCliente)
router.get('/nit/:nit', getClienteByNit)
router.post('/', validateSchema(clienteSchema), createCliente)
router.put('/:id', validateSchema(clienteSchema), updateCliente)
router.delete('/:id', deleteCliente)

export default router
