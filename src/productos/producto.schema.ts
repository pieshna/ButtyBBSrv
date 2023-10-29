import { z } from 'zod'

export const productoSchema = z.object({
  id: z.number().optional(),
  nombre: z.string().max(50),
  imagen: z.string().optional(),
  precio_compra: z.number(),
  created_at: z.date().optional(),
  updated_at: z.date().optional()
})
