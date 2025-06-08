import express from 'express'
import UserController from '../controllers/user.controller'
const userRouter = express.Router()

userRouter.get('/me', (req, res) => {
  UserController.getMe(req, res)
})

export default userRouter
