import { Router } from 'express'

import {
  getRoles,
  getRol,
  createRol,
  deleteRol,
  updateRol
} from './rol.controller'
import { validateSchema } from '../components/middleware/schema'
import { RolSchema } from './rol.schema'

const router = Router()

router.get('/', getRoles)
router.get('/:id', getRol)
router.post('/', validateSchema(RolSchema), createRol)
router.put('/:id', validateSchema(RolSchema), updateRol)
router.delete('/:id', deleteRol)

export default router
