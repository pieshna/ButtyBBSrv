import { z } from 'zod'

export const detalle_ventasSchema = z.object({
  id: z.number().optional(),
  venta_id: z.number(),
  producto_id: z.number(),
  cantidad: z.number(),
  created_at: z.date().optional(),
  updated_at: z.date().optional()
})
