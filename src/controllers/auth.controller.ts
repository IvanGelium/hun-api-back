import { Request, Response } from 'express'
import AuthService from '../services/auth.service'

class AuthController {
  // Регистрация
  static async signup(req: Request, res: Response) {
    try {
      const { email, password, first_name, middle_name, last_name, role } =
        req.body
      const user = await AuthService.signup({
        email,
        password,
        first_name,
        middle_name,
        last_name,
        role,
      })
      res.status(201).json(user)
    } catch (error: any) {
      res.status(400).json({ error: error.message })
    }
  }

  // Логин
  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body
      const { user, token } = await AuthService.login(email, password)
      res.status(200).json({ user, token })
    } catch (error: any) {
      console.log(error.message)
      res.status(401).json({ error: error.message })
    }
  }

  // Проверка токена (для защищённых роутов)
  static async checkAuth(req: Request, res: Response) {
    try {
      const token = req.headers.authorization
      if (!token) throw new Error('No token provided')

      const user = await AuthService.verifyToken(token)
      res.json({ user })
    } catch (error: any) {
      res.status(403).json({ error: error.message })
    }
  }
}

export default AuthController
