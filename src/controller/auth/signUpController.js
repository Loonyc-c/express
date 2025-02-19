import bcrypt from "bcrypt"
import fs from "fs"

export const singUpUserController = (req, res) => {
    const { email, password  } = req.body
    console.log("sign up ");
    
    try{
        console.log("try");
        const cryptPassword = bcrypt.hashSync(password, 8)

        console.log("hash");
        const rawUserData = fs.readFileSync("src/db/users.json")
        const user = JSON.parse(rawUserData)

        console.log("db");
        user.push({ password: cryptPassword, email: email })

        console.log("pushed");
        fs.writeFileSync("src/db/users.json", JSON.stringify(user))

        console.log("pushed");
        res.send("sign up succesfully")
    }catch(error){
        res.send("error")
        console.log(error);
        
        res.send({error})
    }
    
}
