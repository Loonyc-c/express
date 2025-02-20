import express from 'express'
import { authRouter } from './router/auth.js'
import { testRouter } from './router/test-router.js'
import { connectDb } from './utils/connectDb.js'


const app = express()
const port = 3000


app.use(express.json())

// app.use("/users", userRouter)
app.use("/auth",authRouter)

app.use("/test",testRouter)

connectDb()

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})