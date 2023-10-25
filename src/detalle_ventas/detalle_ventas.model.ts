import { DefaultModel } from '../components/defaultModel'

class DetalleVentas extends DefaultModel {
  constructor() {
    super('detalle_ventas', 'id')
  }

  async getTopVentas() {
    const fecha = new Date().toISOString().slice(0, 10)
    const sql = `SELECT dv.producto_id,p.nombre, COUNT(dv.producto_id) AS total_ventas, sum(dv.cantidad) as cantidad
    FROM detalle_ventas AS dv
    INNER JOIN ventas AS v ON dv.venta_id = v.id
    LEFT JOIN productos as p on p.id = dv.producto_id
    WHERE v.fecha = '${fecha}' -- Reemplaza 'fecha_ingresada' con la fecha que deseas
    GROUP BY dv.producto_id
    ORDER BY total_ventas DESC
    LIMIT 5`
    const result = await this.executeQuery(sql)
    return result
  }

  async findByVenta(id: number) {
    const result = await this.findByQuery('venta_id =?', [id])
    return result
  }
}

export default new DetalleVentas()
