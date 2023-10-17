import { Request, Response } from 'express'
import proveedorModel from './proveedor.model'

export async function getProveedores(req: Request, res: Response) {
  const proveedores = await proveedorModel.findAll()
  res.json(proveedores)
}

export async function getProveedor(req: Request, res: Response) {
  const { id } = req.params
  const proveedor = await proveedorModel.findById(Number(id))
  res.json(proveedor)
}

export async function createProveedor(req: Request, res: Response) {
  const body = req.body
  const proveedor = await proveedorModel.create(body)
  res.json(proveedor)
}

export async function updateProveedor(req: Request, res: Response) {
  const { id } = req.params
  const { body } = req
  const proveedor = await proveedorModel.update(Number(id), body)
  res.json(proveedor)
}

export async function deleteProveedor(req: Request, res: Response) {
  const { id } = req.params
  const proveedor = await proveedorModel.delete(Number(id))
  res.json(proveedor)
}
