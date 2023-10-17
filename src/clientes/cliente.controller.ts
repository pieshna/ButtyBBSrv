import { Request, Response } from 'express'
import clienteModel from './cliente.model'

export async function getClientes(req: Request, res: Response) {
  const result = await clienteModel.findAll()
  res.json(result)
}

export async function getCliente(req: Request, res: Response) {
  const { id } = req.params
  const result = await clienteModel.findById(Number(id))
  res.json(result)
}

export async function getClienteByNit(req: Request, res: Response) {
  const { nit } = req.params
  const result = await clienteModel.findByNit(nit)
  res.json(result)
}

export async function createCliente(req: Request, res: Response) {
  const body = req.body
  const result = await clienteModel.create(body)
  res.json(result)
}

export async function updateCliente(req: Request, res: Response) {
  const { id } = req.params
  const { body } = req
  const result = await clienteModel.update(Number(id), body)
  res.json(result)
}

export async function deleteCliente(req: Request, res: Response) {
  const { id } = req.params
  const result = await clienteModel.delete(Number(id))
  res.json(result)
}
