import fs from "fs"

export const login = (req,res,next) => {
     const {firstName,lastName,password} = req.body
     const rawUserData = fs.readFileSync("src/db/users.json")
     const users = JSON.parse(rawUserData)
  
    if (users[0].firstName == firstName && users[0].lastName == lastName && users[0].password == password) {
        res.send("logged")
    } else if (users[0].firstName !== firstName) {
        res.send("first isnt correct")
    } else if (users[0].lastName !== lastName ) {
        res.send("last name isnt correct")
    } else if (users[0].password !== password){
        res.send("password isnt correct")
    }
    else { res.send("failed") }
}