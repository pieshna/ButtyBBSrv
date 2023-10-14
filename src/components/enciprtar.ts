import bcrypt from 'bcrypt'
import { config } from 'dotenv'
config()

export function encriptar(valor: string) {
  const salt = bcrypt.genSaltSync(parseInt(process.env.SALTOS || '10'))
  const hash = bcrypt.hashSync(valor, salt)
  return hash
}

export function comparar(valor: string, hash: string) {
  return bcrypt.compareSync(valor, hash)
}
