import { Request, Response } from 'express'
import RolModel from './rol.model'

export async function getRoles(req: Request, res: Response) {
  const result = await RolModel.findAll()
  res.json(result)
}

export async function getRol(req: Request, res: Response) {
  const { id } = req.params
  const result = await RolModel.findById(Number(id))
  res.json(result)
}

export async function createRol(req: Request, res: Response) {
  const body = req.body
  const result = await RolModel.create(body)
  res.json(result)
}

export async function updateRol(req: Request, res: Response) {
  const { id } = req.params
  const { body } = req
  const result = await RolModel.update(Number(id), body)
  res.json(result)
}

export async function deleteRol(req: Request, res: Response) {
  const { id } = req.params
  const result = await RolModel.delete(Number(id))
  res.json(result)
}
