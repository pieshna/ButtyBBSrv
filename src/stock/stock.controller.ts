import { Request, Response } from 'express'
import stockModel from './stock.model'

export async function getStocks(req: Request, res: Response) {
  const stocks = await stockModel.findAll()
  res.json(stocks)
}

export async function getStockByProduct(req: Request, res: Response) {
  const { id } = req.params
  const stock = await stockModel.findByProduct(Number(id))
  res.json(stock)
}

export async function createStock(req: Request, res: Response) {
  const { body } = req
  const stock = await stockModel.create(body)
  res.json(stock)
}

export async function updateStock(req: Request, res: Response) {
  const { id } = req.params
  const { body } = req
  const stock = await stockModel.update(Number(id), body)
  res.json(stock)
}

export async function deleteStock(req: Request, res: Response) {
  const { id } = req.params
  const stock = await stockModel.delete(Number(id))
  res.json(stock)
}

export async function updateStockByProduct(req: Request, res: Response) {
  const { id } = req.params
  const { body } = req
  const stock = await stockModel.updateByProduct(Number(id), body)
  res.json(stock)
}
