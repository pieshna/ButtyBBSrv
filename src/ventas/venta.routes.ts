import Router from 'express'
import {
  createVenta,
  deleteVenta,
  getVenta,
  getVentas,
  updateVenta
} from './venta.controller'
import { validateSchema } from '../components/middleware/schema'
import { ventaSchema } from './venta.schema'

const router = Router()

router.get('/', getVentas)
router.get('/:id', getVenta)
router.post('/', validateSchema(ventaSchema), createVenta)
router.put('/:id', validateSchema(ventaSchema), updateVenta)
router.delete('/:id', deleteVenta)

export default router
