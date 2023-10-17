import { DefaultModel } from '../components/defaultModel'

class ProveedorModel extends DefaultModel {
  constructor() {
    super('proveedores', 'id')
  }
}

export default new ProveedorModel()
