import express from 'express'
// import { userRouter } from './router/users-router.js'
import { authRouter } from './router/auth.js'

const app = express()
const port = 3000


app.use(express.json())

// app.use("/users", userRouter)
app.use("/auth",authRouter)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})