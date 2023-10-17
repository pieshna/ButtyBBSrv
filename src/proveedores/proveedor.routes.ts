import Router from 'express'
import {
  createProveedor,
  deleteProveedor,
  getProveedor,
  getProveedores,
  updateProveedor
} from './proveedor.controller'
import { validateSchema } from '../components/middleware/schema'
import { proveedorSchema } from './proveedor.schema'

const router = Router()

router.get('/', getProveedores)
router.get('/:id', getProveedor)
router.post('/', validateSchema(proveedorSchema), createProveedor)
router.put('/:id', validateSchema(proveedorSchema), updateProveedor)
router.delete('/:id', deleteProveedor)

export default router
