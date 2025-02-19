import fs from "fs"
import bcrypt from "bcrypt"

export const loginMiddleWare = async (req,res,next) => {
    const {email,password} = req.body
    const rawUserData = fs.readFileSync("src/db/users.json")
    const parseRawData = JSON.parse(rawUserData)
    const user = parseRawData.find((user)=> user.email === email)
    
    if(!user){
        res.status(400).json({
            error: "Bad Request", message: "user not found"
        })
    } else {
        const isPasswordMatching = await bcrypt.compare(password, user.password)
        if (!isPasswordMatching){
            res.status(400).json({
                error: "Bad Request", message: "wrong password "
            })
        } else {
            next()
        }
    }

}