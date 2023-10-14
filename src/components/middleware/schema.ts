import { NextFunction, Request, Response } from 'express'
import { AnyZodObject, ZodError } from 'zod'

export function validateSchema(schema: AnyZodObject) {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      const result = schema.parse(req.body)
      req.body = result
      next()
    } catch (error: any) {
      if (error instanceof ZodError) {
        res.status(400).json({ error: error.errors })
      } else {
        res.status(500).json({ error: error.message })
      }
    }
  }
}
