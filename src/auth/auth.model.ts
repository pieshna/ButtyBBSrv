import { DefaultModel } from '../components/defaultModel'

class AuthModel extends DefaultModel {
  constructor() {
    super('usuarios', 'id')
  }

  async findByEmail(correo: string) {
    return this.findByQuery('correo = ?', [correo])
  }
}

export default new AuthModel()
