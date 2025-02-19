import express from 'express'
import { singUpUserController } from '../controller/auth/signUpController.js'
import { emailPasswordValidation } from '../utils/middleware.js'
import { loginController } from '../controller/auth/loginController.js'
import { loginMiddleWare } from '../middleware/login-middleware/login-middleware.js'

export const authRouter = express.Router()

authRouter.post("/signup", emailPasswordValidation,singUpUserController)
authRouter.post("/login",emailPasswordValidation,loginMiddleWare, loginController )
