import { DefaultModel } from '../components/defaultModel'

class AuthModel extends DefaultModel {
  constructor() {
    super('usuarios', 'id')
  }

  async findByEmail(correo: string) {
    const sql =
      'SELECT u.id,u.correo,u.password,r.nombre as rol, CONCAT(u.nombre, " ", u.apellido) as usuario FROM usuarios as u join roles as r on u.rol_id = r.id WHERE u.correo = ? AND u.estado = 1 LIMIT 1'
    const result = await this.executeQuery(sql, [correo])
    return result
  }
}

export default new AuthModel()
