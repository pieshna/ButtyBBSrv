import Router from 'express'
import {
  createProductoProveedor,
  deleteProductoProveedor,
  getProductoProveedorByProduct,
  getProductoProveedorByProveedor,
  getProductosProveedores,
  updateProductoProveedor
} from './producto_proveedor.controller'
import { validateSchema } from '../components/middleware/schema'
import { ProductoProveedorSchema } from './producto_proveedor.schema'

const router = Router()

router.get('/', getProductosProveedores)
router.get('/producto/:id', getProductoProveedorByProduct)
router.get('/proveedor/:id', getProductoProveedorByProveedor)
router.post(
  '/',
  validateSchema(ProductoProveedorSchema),
  createProductoProveedor
)
router.put(
  '/:id',
  validateSchema(ProductoProveedorSchema),
  updateProductoProveedor
)
router.delete('/:id', deleteProductoProveedor)

export default router
