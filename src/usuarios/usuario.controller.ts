import { Request, Response } from 'express'
import UsuarioModel from './usuario.model'
import { encriptar } from '../components/enciprtar'

export async function getUsuarios(req: Request, res: Response) {
  const result = await UsuarioModel.findAll()
  res.json(result)
}

export async function getUsuario(req: Request, res: Response) {
  const { id } = req.params
  const result = await UsuarioModel.findById(Number(id))
  res.json(result)
}

export async function createUsuario(req: Request, res: Response) {
  const body = req.body
  const { password } = body
  const passwordEncriptada = encriptar(password)
  body.password = passwordEncriptada
  const result = await UsuarioModel.create(body)
  res.json(result)
}

export async function updateUsuario(req: Request, res: Response) {
  const { id } = req.params
  const { body } = req
  const result = await UsuarioModel.update(Number(id), body)
  res.json(result)
}

export async function deleteUsuario(req: Request, res: Response) {
  const { id } = req.params
  const result = await UsuarioModel.delete(Number(id))
  res.json(result)
}
