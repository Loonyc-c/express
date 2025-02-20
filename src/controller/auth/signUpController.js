import bcrypt from "bcrypt"
import fs from "fs"

export const singUpUserController = (req, res) => {
    const { email, password  } = req.body
    
    try{
        const cryptPassword = bcrypt.hashSync(password, 8)

        const rawUserData = fs.readFileSync("src/db/users.json")
        const user = JSON.parse(rawUserData)

        user.push({ password: cryptPassword, email: email })

        fs.writeFileSync("src/db/users.json", JSON.stringify(user))

        res.send("sign up succesfully")
    }catch(error){
        
        res.send({error})
    }
    
}
