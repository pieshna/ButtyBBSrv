import { z } from 'zod'

export const ventaSchema = z.object({
  id: z.number().optional(),
  empleado_id: z.number(),
  cliente_id: z.number(),
  fecha: z.string(),
  subtotal: z.number(),
  total: z.number(),
  created_at: z.date().optional(),
  updated_at: z.date().optional()
})
