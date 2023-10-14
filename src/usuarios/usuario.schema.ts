import { z } from 'zod'

export const UsuarioSchema = z.object({
  id: z.number().optional(),
  nombre: z.string(),
  apellido: z.string(),
  correo: z.string().email(),
  password: z.string().min(6),
  foto: z.string().optional(),
  rol_id: z.number(),
  estado: z.boolean().optional(),
  created_at: z.date().optional(),
  updated_at: z.date().optional()
})
