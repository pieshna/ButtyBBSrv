import { Router } from 'express'
import {
  createUsuario,
  deleteUsuario,
  getUsuario,
  getUsuarios,
  updateUsuario
} from './usuario.controller'
import { validateSchema } from '../components/middleware/schema'
import { UsuarioSchema } from './usuario.schema'

const router = Router()

router.get('/', getUsuarios)
router.get('/:id', getUsuario)
router.post('/', validateSchema(UsuarioSchema), createUsuario)
router.put('/:id', validateSchema(UsuarioSchema), updateUsuario)
router.delete('/:id', deleteUsuario)

export default router
