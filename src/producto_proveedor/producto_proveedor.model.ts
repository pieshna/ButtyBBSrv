import { DefaultModel } from '../components/defaultModel'

class ProductoProveedorModel extends DefaultModel {
  constructor() {
    super('producto_proveedor', 'id')
  }

  async findByProduct(id: number) {
    const result = await this.executeQuery(
      'select * from productos as p inner join producto_proveedor as pp on p.id = pp.producto_id where pp.producto_id = ?',
      [id]
    )
    return result
  }

  async findByProveedor(id: number) {
    const result = await this.executeQuery(
      'select * from proveedores as p inner join producto_proveedor as pp on p.id = pp.proveedor_id where pp.proveedor_id = ?',
      [id]
    )
    return result
  }
}

export default new ProductoProveedorModel()
