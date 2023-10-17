import { Request, Response } from 'express'
import authModel from './auth.model'
import { comparar } from '../components/enciprtar'

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
    res.json({ message: 'Login correcto' })
  } catch (e: any) {
    res.status(400).json({ message: e.message || e })
  }
}
