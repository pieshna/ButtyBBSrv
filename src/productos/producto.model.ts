import { DefaultModel } from '../components/defaultModel'

class ProductoModel extends DefaultModel {
  constructor() {
    super('productos', 'id')
  }

  async findProductWithStock() {
    const sql =
      'SELECT p.id, p.nombre,p.imagen,p.precio_compra,s.precio_venta,s.unidades,s.descripcion, p.created_at,s.updated_at from productos as p left join stock as s on p.id = s.producto_id'
    const result = await this.executeQuery(sql)
    return result
  }
}

export default new ProductoModel()
