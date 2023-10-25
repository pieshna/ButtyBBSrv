import connection from '../db'
import { addCreatedAt, addUpdatedAt } from './timestamp'

export class DefaultModel {
  constructor(private table: string, private idNombre: string) {}

  private async query(sql: string, values?: any[]) {
    try {
      const [rows] = await connection.query(sql, values)
      return JSON.parse(JSON.stringify(rows))
    } catch (error: any) {
      return { error: error.message ?? error }
    }
  }

  async findAll() {
    return this.query(`SELECT * FROM ${this.table}`)
  }

  async findById(id: number) {
    return this.query(
      `SELECT * FROM ${this.table} WHERE ${this.idNombre} = ?`,
      [id]
    )
  }

  async create(data: any) {
    const conCreatedAt = addCreatedAt(data)
    return this.query(`INSERT INTO ${this.table} SET ?`, [conCreatedAt])
  }

  async createMany(data: any[]) {
    const conCreatedAt = data.map((item) => addCreatedAt(item))
    const values = conCreatedAt.map((item) => Object.values(item))
    const columns = Object.keys(conCreatedAt[0]).join(',')
    const placeholders = Array(conCreatedAt.length)
      .fill(`(${values[0].map(() => '?').join(',')})`)
      .join(',')
    const sql = `INSERT INTO ${this.table} (${columns}) VALUES ${placeholders}`

    const flattenedValues = values.reduce((acc, val) => acc.concat(val), [])

    console.log(sql)
    console.log(flattenedValues)

    return this.query(sql, flattenedValues)
  }

  async update(id: number, data: any) {
    const conUpdatedAt = addUpdatedAt(data)
    return this.query(`UPDATE ${this.table} SET ? WHERE ${this.idNombre} = ?`, [
      conUpdatedAt,
      id
    ])
  }

  async delete(id: number) {
    return this.query(`DELETE FROM ${this.table} WHERE ${this.idNombre} = ?`, [
      id
    ])
  }

  async findByQuery(query: string, values?: any[]) {
    return this.query(`SELECT * FROM ${this.table} WHERE ${query}`, values)
  }

  async executeQuery(query: string, values?: any[]) {
    return this.query(query, values)
  }
}
