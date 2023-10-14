import { DefaultModel } from '../components/defaultModel'

class RolModel extends DefaultModel {
  constructor() {
    super('roles', 'id')
  }
}

export default new RolModel()
