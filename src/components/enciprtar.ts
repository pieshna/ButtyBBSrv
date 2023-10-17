import bcrypt from 'bcrypt'
import { config } from 'dotenv'
config()

export function encriptar(valor: string) {
  const salt = bcrypt.genSaltSync(parseInt(process.env.SALTOS || '10'))
  const hash = bcrypt.hashSync(valor, salt)
  return hash
}

export async function comparar(valor: string, hash: string) {
  try {
    const match = await bcrypt.compare(valor, hash)
    return match
  } catch (error) {
    return false
  }
}
