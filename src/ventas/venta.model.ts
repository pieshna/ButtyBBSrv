import { DefaultModel } from '../components/defaultModel'

class VentaModel extends DefaultModel {
  constructor() {
    super('ventas', 'id')
  }
}

export default new VentaModel()
