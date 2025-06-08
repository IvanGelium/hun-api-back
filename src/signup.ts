import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import bcrypt from 'bcryptjs'

export default async function signup(data) {
  try {
    const user = await prisma.user.create({
      data: {
        email: data.email,
        password: await bcrypt.hash(data.password, 10),
        first_name: '',
        middle_name: '',
        last_name: '',
        role: 'ADMIN',
      },
    })
    return user
  } catch (error) {
    console.error('Signup error:', error)
    throw error
  }
}
