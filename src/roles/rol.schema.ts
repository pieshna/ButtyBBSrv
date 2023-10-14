import { z } from 'zod'

export const RolSchema = z.object({
  id: z.number().optional(),
  nombre: z.string(),
  created_at: z.date().optional(),
  updated_at: z.date().optional()
})
