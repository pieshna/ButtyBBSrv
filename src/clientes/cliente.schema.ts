import { z } from 'zod'

export const clienteSchema = z.object({
  id: z.number().optional(),
  nombre: z.string(),
  apellido: z.string(),
  correo: z.string().email(),
  nit: z.string().max(20),
  created_at: z.date().optional(),
  updated_at: z.date().optional()
})
