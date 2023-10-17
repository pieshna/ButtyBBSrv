import { Request, Response } from 'express'
import productoModel from './producto.model'

export async function getProductos(req: Request, res: Response) {
  const productos = await productoModel.findAll()
  res.json(productos)
}

export async function getProducto(req: Request, res: Response) {
  const { id } = req.params
  const producto = await productoModel.findById(Number(id))
  res.json(producto)
}

export async function createProducto(req: Request, res: Response) {
  const { body } = req
  const producto = await productoModel.create(body)
  res.json(producto)
}

export async function updateProducto(req: Request, res: Response) {
  const { id } = req.params
  const { body } = req
  const producto = await productoModel.update(Number(id), body)
  res.json(producto)
}

export async function deleteProducto(req: Request, res: Response) {
  const { id } = req.params
  const producto = await productoModel.delete(Number(id))
  res.json(producto)
}
