import { Request, Response } from 'express'
import ventaModel from './venta.model'

export async function getVentas(req: Request, res: Response) {
  const ventas = await ventaModel.findAll()
  res.json(ventas)
}

export async function getVenta(req: Request, res: Response) {
  const { id } = req.params
  const venta = await ventaModel.findById(Number(id))
  res.json(venta)
}

export async function createVenta(req: Request, res: Response) {
  const { body } = req
  const venta = await ventaModel.create(body)
  res.json(venta)
}

export async function updateVenta(req: Request, res: Response) {
  const { id } = req.params
  const { body } = req
  const venta = await ventaModel.update(Number(id), body)
  res.json(venta)
}

export async function deleteVenta(req: Request, res: Response) {
  const { id } = req.params
  const venta = await ventaModel.delete(Number(id))
  res.json(venta)
}
