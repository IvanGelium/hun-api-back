import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../utils/env.util'

// Генерация токена
export const generateToken = (userId: number) => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' })
}

// Верификация токена
export const verifyToken = (token: string) => {
  const payload = jwt.verify(token, JWT_SECRET) as { userId: number }
  return payload.userId
}
