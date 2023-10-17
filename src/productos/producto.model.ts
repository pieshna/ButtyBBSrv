import { DefaultModel } from '../components/defaultModel'

class ProductoModel extends DefaultModel {
  constructor() {
    super('productos', 'id')
  }
}

export default new ProductoModel()
