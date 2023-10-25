import { Request, Response } from 'express'
import detalleVentaModel from './detalle_ventas.model'

export async function getDetalleVentas(req: Request, res: Response) {
  const detalleVentas = await detalleVentaModel.findAll()
  res.json(detalleVentas)
}

export async function getDetalleVenta(req: Request, res: Response) {
  const { id } = req.params
  const detalleVenta = await detalleVentaModel.findById(Number(id))
  res.json(detalleVenta)
}

export async function createDetalleVenta(req: Request, res: Response) {
  const { body } = req
  const detalleVenta = await detalleVentaModel.create(body)
  res.json(detalleVenta)
}

export async function updateDetalleVenta(req: Request, res: Response) {
  const { id } = req.params
  const { body } = req
  const detalleVenta = await detalleVentaModel.update(Number(id), body)
  res.json(detalleVenta)
}

export async function deleteDetalleVenta(req: Request, res: Response) {
  const { id } = req.params
  const detalleVenta = await detalleVentaModel.delete(Number(id))
  res.json(detalleVenta)
}

export async function createManyDetalleVenta(req: Request, res: Response) {
  const { body } = req
  const detalleVenta = await detalleVentaModel.createMany(body)
  res.json(detalleVenta)
}
