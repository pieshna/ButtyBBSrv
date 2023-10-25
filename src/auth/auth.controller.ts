import { Request, Response } from 'express'
import authModel from './auth.model'
import { comparar } from '../components/enciprtar'
import { generarToken } from './auth.utils'

export async function login(req: Request, res: Response) {
  try {
    const { correo, password } = req.body
    const usuario = await authModel.findByEmail(correo)
    if (!usuario || usuario?.length === 0) {
      throw new Error('Usuario no encontrado')
    }
    const matchPassword = await comparar(password, usuario[0].password)
    if (!matchPassword) {
      throw new Error('Contraseña incorrecta')
    }

    const token = generarToken({
      usuarioId: usuario[0].id,
      usuario: usuario[0].usuario,
      correo: usuario[0].correo,
      rol: usuario[0].rol
    })
    res.json(token)
  } catch (e: any) {
    res.status(400).json({ message: e.message || e })
  }
}
