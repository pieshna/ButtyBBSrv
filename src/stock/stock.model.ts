import { DefaultModel } from '../components/defaultModel'

class StockModel extends DefaultModel {
  constructor() {
    super('stock', 'id')
  }

  async findByProduct(id: number) {
    const result = await this.findByQuery('producto_id =?', [id])
    return result
  }

  async updateByProduct(id: number, data: any) {
    const result = await this.findByProduct(id)

    const updated = await this.update(result[0].id, data)

    return updated
  }

  async createCompra(productId: number, data: any) {
    const result = await this.findByProduct(productId)
    const stock = result[0]
    const newStock = {
      ...stock,
      unidades: stock.unidades + data.unidades
    }
    if (newStock.created_at) delete newStock.created_at
    if (newStock.updated_at) delete newStock.updated_at
    if (newStock.id) delete newStock.id
    const updated = await this.update(stock.id, newStock)
    return updated
  }
}

export default new StockModel()
