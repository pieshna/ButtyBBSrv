import express from 'express'
import cors from 'cors'

import rolRoutes from './roles/rol.routes'
import usuarioRoutes from './usuarios/usuario.routes'
import authRoutes from './auth/auth.routes'
import clienteRoutes from './clientes/cliente.routes'
import proveedorRoutes from './proveedores/proveedor.routes'
import productoRoutes from './productos/producto.routes'
import stockRotues from './stock/stock.routes'
import productoProveedorRoutes from './producto_proveedor/producto_proveedor.routes'
import ventaRoutes from './ventas/venta.routes'
import detalleVentasRoutes from './detalle_ventas/detalle_ventas.routes'

const app = express()
app.use(express.json())

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use('/roles', rolRoutes)
app.use('/usuarios', usuarioRoutes)
app.use('/auth', authRoutes)
app.use('/clientes', clienteRoutes)
app.use('/proveedores', proveedorRoutes)
app.use('/productos', productoRoutes)
app.use('/stock', stockRotues)
app.use('/producto-proveedor', productoProveedorRoutes)
app.use('/ventas', ventaRoutes)
app.use('/detalle-ventas', detalleVentasRoutes)

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
