import express from 'express'
import rolRoutes from './roles/rol.routes'
import usuarioRoutes from './usuarios/usuario.routes'
import authRoutes from './auth/auth.routes'

const app = express()
app.use(express.json())

app.use('/roles', rolRoutes)
app.use('/usuarios', usuarioRoutes)
app.use('/auth', authRoutes)

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
