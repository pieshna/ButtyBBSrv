import { Request, Response } from 'express'
import detalleVentaModel from './detalle_ventas.model'
import stockModel from '../stock/stock.model'

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
  const esperar = await body.map(async (detalleVenta: any) => {
    const unidades = await stockModel.findByProduct(detalleVenta.producto_id)
    if (unidades[0].unidades >= detalleVenta.cantidad) {
      console.log('tengo suficientes unidades')
      return true
    } else {
      console.log('no tengo suficientes unidades')
      return false
    }
  })
  const resultado = await Promise.all(esperar)

  if (resultado.includes(false)) {
    return res
      .status(400)
      .json({ message: 'No hay suficientes unidades en stock' })
  }

  body.forEach(async (detalleVenta: any) => {
    const unidades = {
      unidades: detalleVenta.cantidad
    }
    await stockModel.createVenta(detalleVenta.producto_id, unidades)
  })
  const detalleVenta = await detalleVentaModel.createMany(body)
  res.json(detalleVenta)
}

export async function getTopVentas(req: Request, res: Response) {
  const detalleVenta = await detalleVentaModel.getTopVentas()
  res.json(detalleVenta)
}

export async function findByVenta(req: Request, res: Response) {
  const { id } = req.params
  const detalleVenta = await detalleVentaModel.findByVenta(Number(id))
  res.json(detalleVenta)
}
