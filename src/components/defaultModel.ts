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
}
