import Router from 'express'
import {
  createStock,
  deleteStock,
  getStockByProduct,
  getStocks,
  updateStock,
  updateStockByProduct
} from './stock.controller'
import { validateSchema } from '../components/middleware/schema'
import { stockSchema } from './stock.schema'

const router = Router()

router.get('/', getStocks)
router.get('/producto/:id', getStockByProduct)
router.post('/', validateSchema(stockSchema), createStock)
router.put('/producto/:id', validateSchema(stockSchema), updateStockByProduct)
router.put('/:id', validateSchema(stockSchema), updateStock)
router.delete('/:id', deleteStock)

export default router
