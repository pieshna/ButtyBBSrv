import { z } from 'zod'

export const stockSchema = z.object({
  id: z.number().optional(),
  producto_id: z.number(),
  precio_venta: z.number(),
  unidades: z.number(),
  descripcion: z.string().optional(),
  created_at: z.date().optional(),
  updated_at: z.date().optional()
})
