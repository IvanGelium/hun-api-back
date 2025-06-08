import express from 'express'
import AuthController from '../controllers/auth.controller'
const authRouter = express.Router()

authRouter.post('/login', (req, res) => {
  AuthController.login(req, res)
})

authRouter.post('/signup', (req, res) => {
  AuthController.signup(req, res)
})

export default authRouter
