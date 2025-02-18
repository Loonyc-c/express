import express from 'express'
import getUser from '../controller/get-user.js'
import { createUsers } from '../controller/create-user.js'
import { putUsers } from '../controller/put-user.js'
import { deleteUser } from '../controller/delete-user.js'
import { login } from '../controller/login/login.js'

export const userRouter = express.Router()
userRouter.get('/', getUser)
userRouter.post('/',createUsers)
userRouter.put("/", putUsers)
userRouter.delete('/',deleteUser)
userRouter.get('/login', login)