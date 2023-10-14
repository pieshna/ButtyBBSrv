import mysql from 'mysql2/promise'
import { config } from 'dotenv'
config()

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env

const connection = mysql.createPool({
  host: DB_HOST,
  port: parseInt(DB_PORT || '3306'),
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0
})

export default connection
