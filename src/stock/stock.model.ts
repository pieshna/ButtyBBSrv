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
}

export default new StockModel()
