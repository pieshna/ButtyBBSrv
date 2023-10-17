import { DefaultModel } from '../components/defaultModel'

class StockModel extends DefaultModel {
  constructor() {
    super('stock', 'id')
  }

  async findByProduct(id: number) {
    const result = await this.findByQuery('producto_id =?', [id])
    return result
  }
}

export default new StockModel()
