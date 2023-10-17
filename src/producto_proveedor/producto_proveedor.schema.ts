import { z } from 'zod'

export const ProductoProveedorSchema = z.object({
  id: z.number().optional(),
  producto_id: z.number(),
  proveedor_id: z.number(),
  created_at: z.date().optional(),
  updated_at: z.date().optional()
})
