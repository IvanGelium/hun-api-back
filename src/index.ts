// @ts-nocheck
import express from 'express'
import userRouter from './routes/user.route'
import authRouter from './routes/auth.route'
import suggestionRouter from './routes/suggestion.route'
const cors = require('cors')
const router = express.Router()
const app = express()
const PORT = 4000

app.use(express.json())
app.use(cors())
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.use('/api/suggestion', suggestionRouter)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
