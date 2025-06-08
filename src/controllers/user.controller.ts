import { Request, Response } from 'express'
import UserService from '../services/user.service'

class UserController {
  // Регистрация
  static async getMe(req: Request, res: Response) {
    try {
      const token = req.headers.authorization
      const user = await UserService.userByToken(token)
      res.status(200).json(user)
    } catch (error: any) {
      res.status(400).json({ error: error.message })
    }
  }
}

export default UserController
