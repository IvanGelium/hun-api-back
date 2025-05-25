import express from 'express'
import { PrismaClient } from './generated/prisma'

const prisma = new PrismaClient()
const app = express()
const PORT = 3000

app.use(express.json())

app.get('/', async (req, res) => {
  const users = await prisma.user.findMany()
  res.send(users)
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
