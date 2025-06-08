import { Request, Response } from 'express'
import suggestionService from '../services/suggestion.service'
import { verifyToken } from '../utils/jwt.util'
import AuthService from '../services/auth.service'

class suggestionController {
  static async getAll(req: Request, res: Response) {
    try {
      const suggestions = await suggestionService.getAll()
      res.status(200).json(suggestions)
    } catch (error: any) {
      res.status(400).json({ error: error.message })
    }
  }

  static async getByStatus(req: Request, res: Response) {
    try {
      const status = req.params['status']
      const suggestions = await suggestionService.getByStatus(status)
      res.status(200).json(suggestions)
    } catch (error: any) {
      res.status(400).json({ error: error.message })
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const id = req.params['id']
      const suggestions = await suggestionService.getById(id)
      res.status(200).json(suggestions)
    } catch (error: any) {
      res.status(400).json({ error: error.message })
    }
  }

  static async updateById(req: Request, res: Response) {
    try {
      const token = req.headers.authorization
      if (!token) throw new Error('No token provided')

      const user = await AuthService.verifyToken(token)
      const data = req.body
      const id = req.params['id']
      const suggestions = await suggestionService.updateById({ user, data, id })
      res.status(200).json(suggestions)
    } catch (error: any) {
      res.status(400).json({ error: error.message })
    }
  }

  static async deleteById(req: Request, res: Response) {
    try {
      const token = req.headers.authorization
      if (!token) throw new Error('No token provided')
      const user = await AuthService.verifyToken(token)
      const id = req.params['id']
      const suggestions = await suggestionService.deleteById({ user, id })
      res.status(200).json(suggestions)
    } catch (error: any) {
      res.status(400).json({ error: error.message })
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const data = req.body
      const suggestions = await suggestionService.create(data)
      res.status(200).json(suggestions)
    } catch (error: any) {
      res.status(400).json({ error: error.message })
    }
  }
}

export default suggestionController
