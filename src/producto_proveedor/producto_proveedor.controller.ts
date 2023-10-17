import { Request, Response } from 'express'
import productoProveedorModel from './producto_proveedor.model'

export async function getProductosProveedores(req: Request, res: Response) {
  const productosProveedores = await productoProveedorModel.findAll()
  res.json(productosProveedores)
}

export async function getProductoProveedorByProduct(
  req: Request,
  res: Response
) {
  const { id } = req.params
  const productoProveedor = await productoProveedorModel.findByProduct(
    Number(id)
  )
  res.json(productoProveedor)
}

export async function getProductoProveedorByProveedor(
  req: Request,
  res: Response
) {
  const { id } = req.params
  const productoProveedor = await productoProveedorModel.findByProveedor(
    Number(id)
  )
  res.json(productoProveedor)
}

export async function createProductoProveedor(req: Request, res: Response) {
  const { body } = req
  const productoProveedor = await productoProveedorModel.create(body)
  res.json(productoProveedor)
}

export async function updateProductoProveedor(req: Request, res: Response) {
  const { id } = req.params
  const { body } = req
  const productoProveedor = await productoProveedorModel.update(
    Number(id),
    body
  )
  res.json(productoProveedor)
}

export async function deleteProductoProveedor(req: Request, res: Response) {
  const { id } = req.params
  const productoProveedor = await productoProveedorModel.delete(Number(id))
  res.json(productoProveedor)
}
