import { PrismaClient } from '@prisma/client'
import { generateToken, verifyToken } from '../utils/jwt.util'
import bcrypt from 'bcryptjs'
import User from '../model/User.model'

class AuthService {
  //регистрация
  static async signup(data) {
    try {
      const userInfo = {
        email: data.email,
        password: await bcrypt.hash(data.password, 10),
        first_name: data.first_name || '',
        middle_name: data.middle_name || '',
        last_name: data.last_name || '',
        role: data.name || 'ADMIN',
      }
      const user = await User.create(userInfo)
      return {
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        role: user.role,
      }
    } catch (error) {
      console.error('Signup error:', error)
      throw error
    }
  }
  //логин
  static async login(email, password) {
    const user = await User.getByEmail(email)

    if (!user) {
      throw new Error('User not found')
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      throw new Error('User not found')
    }

    const token = generateToken(user.id)

    return {
      token,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
    }
  }

  static async verifyToken(token: string) {
    const userId = verifyToken(token)
    const user = await User.getById(userId)
    if (!user) throw new Error('Invalid token')
    return user
  }
}

export default AuthService
