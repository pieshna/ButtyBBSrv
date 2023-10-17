import { z } from 'zod'

export const proveedorSchema = z.object({
  id: z.number().optional(),
  nombre: z.string(),
  telefono: z.string().max(20),
  compania: z.string().max(50),
  created_at: z.date().optional(),
  updated_at: z.date().optional()
})
