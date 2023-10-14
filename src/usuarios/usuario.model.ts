import { DefaultModel } from '../components/defaultModel'

class UsuarioModel extends DefaultModel {
  constructor() {
    super('usuarios', 'id')
  }
}

export default new UsuarioModel()
