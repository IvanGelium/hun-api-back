import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'
import User from '../model/User.model'

const prisma = new PrismaClient()
const JWT_SECRET = process.env.JWT_SECRET

export default async function authenticateToken(req, res, next) {
  // const token = req.headers['auth']
}
