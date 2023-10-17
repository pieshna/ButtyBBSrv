import { DefaultModel } from '../components/defaultModel'

class ClienteModel extends DefaultModel {
  constructor() {
    super('clientes', 'id')
  }

  async findByNit(nit: string) {
    const result = await this.findByQuery('nit = ?', [nit])
    return result
  }
}

export default new ClienteModel()
