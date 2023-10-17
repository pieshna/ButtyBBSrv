import { DefaultModel } from '../components/defaultModel'

class DetalleVentas extends DefaultModel {
  constructor() {
    super('detalle_ventas', 'id')
  }
}

export default new DetalleVentas()
