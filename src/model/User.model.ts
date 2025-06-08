const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class User {
  // Получить пользователя по ID
  static async getById(id) {
    return await prisma.user.findUnique({
      where: { id: Number(id) },
    })
  }
  // Получить пользователя по Email
  static async getByEmail(email) {
    return await prisma.user.findUnique({
      where: { email: String(email) },
    })
  }

  // Создать пользователя
  static async create({
    email,
    password,
    first_name,
    middle_name,
    last_name,
    role,
  }) {
    return await prisma.user.create({
      data: {
        email: email,
        password: password,
        first_name: first_name,
        middle_name: middle_name,
        last_name: last_name,
        role: role,
      },
    })
  }

  // Удалить пользователя
  static async delete(id) {
    return await prisma.user.delete({
      where: { id: Number(id) },
    })
  }
}

export default User
