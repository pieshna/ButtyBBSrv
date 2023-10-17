import Router from 'express'
import {
  createProducto,
  deleteProducto,
  getProducto,
  getProductos,
  updateProducto
} from './producto.controller'
import { validateSchema } from '../components/middleware/schema'
import { productoSchema } from './producto.schema'

const router = Router()

router.get('/', getProductos)
router.get('/:id', getProducto)
router.post('/', validateSchema(productoSchema), createProducto)
router.put('/:id', validateSchema(productoSchema), updateProducto)
router.delete('/:id', deleteProducto)

export default router