import { PrismaClient } from '@prisma/client'
import { verifyToken } from '../utils/jwt.util'
import User from '../model/User.model'

class UserService {
  //Ме
  static async userByToken(token) {
    try {
      const userId = verifyToken(token)

      if (!userId) throw new Error('expired or wrong token')

      const user = await User.getById(userId)

      if (!user) throw new Error('User not found')
      return {
        id: user.id,
        role: user.role,
        first_name: user.first_name,
        middle_name: user.middle_name,
        last_name: user.last_name,
      }
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

export default UserService
