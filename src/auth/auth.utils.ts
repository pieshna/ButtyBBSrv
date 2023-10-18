import jwt from 'jsonwebtoken'
import { config } from 'dotenv'
config()

interface Payload {
  usuario: string
  correo: string
  rol: string
}

const secreto = process.env.SECRETO || 'secreto'

export function generarToken(payload: Payload) {
  return jwt.sign(payload, secreto, { expiresIn: '1h' })
}

export function validarToken(token: string) {
  return jwt.verify(token, secreto)
}
