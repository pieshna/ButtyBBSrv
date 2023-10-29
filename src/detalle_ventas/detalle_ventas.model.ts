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
    const resultVenta = await this.findByQuery('venta_id =?', [id])
    if (resultVenta.length === 0) return ['No hay detalle de venta']
    const sql = `
    SELECT dv.id,dv.venta_id, dv.cantidad, v.fecha, dv.cantidad*s.precio_venta as subtotal,v.total, v.created_at, p.nombre as producto_nombre, s.precio_venta, s.descripcion, CONCAT(c.apellido,', ',c.nombre) as cliente_nombre,c.nit,c.correo, CONCAT(u.apellido,', ',u.nombre) as empleado
      FROM detalle_ventas as dv 
      LEFT JOIN ventas as v
      ON dv.venta_id = v.id
      LEFT JOIN productos as p
      ON dv.producto_id = p.id
      LEFT JOIN stock as s
      ON p.id = s.producto_id
      LEFT JOIN clientes as c
      ON v.cliente_id = c.id
      LEFT JOIN usuarios as u
      ON v.empleado_id = u.id
      WHERE dv.venta_id = ?
    `
    const result = await this.executeQuery(sql, [resultVenta[0].venta_id])

    return result
  }
}

export default new DetalleVentas()
