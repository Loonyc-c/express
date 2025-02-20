import express from 'express'
import getUser from '../controller/test/getUser.js'
import createUsers from '../controller/test/createUser.js'
import deleteUser from '../controller/test/deteteUser.js'
import updateUser from '../controller/test/updateUser.js'
export const testRouter = express.Router()

testRouter.get("/", getUser)
testRouter.post("/", createUsers)
testRouter.delete("/",deleteUser)
testRouter.put("/",updateUser)