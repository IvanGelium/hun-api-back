import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
const prisma = new PrismaClient()
const JWT_SECRET = process.env.JWT_SECRET || '123123'

export default async function login(data) {
  const user = await prisma.user.findUnique({
    where: { email: data.email },
  })

  if (!user) {
    throw new Error('User not found')
  }

  const isPasswordValid = await bcrypt.compare(data.password, user.password)

  if (!isPasswordValid) {
    throw new Error('Invalid password')
  }

  const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, {
    expiresIn: '14d',
  })

  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      role: user.role,
    },
  }
}
