import Router from 'express'
import {
  createDetalleVenta,
  deleteDetalleVenta,
  getDetalleVenta,
  getDetalleVentas,
  updateDetalleVenta,
  createManyDetalleVenta,
  getTopVentas,
  findByVenta
} from './detalle_ventas.controller'
import { validateSchema } from '../components/middleware/schema'
import { detalle_ventasSchema } from './detalle_ventas.schema'

const router = Router()

router.get('/', getDetalleVentas)
router.get('/top-ventas', getTopVentas)
router.get('/venta/:id', findByVenta)
router.get('/:id', getDetalleVenta)
router.post('/', validateSchema(detalle_ventasSchema), createDetalleVenta)
router.post('/many', createManyDetalleVenta)
router.put('/:id', validateSchema(detalle_ventasSchema), updateDetalleVenta)
router.delete('/:id', deleteDetalleVenta)

export default router
