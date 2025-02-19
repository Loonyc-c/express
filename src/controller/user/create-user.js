// import fs from "fs"


// export let users = []

// export const createUsers = (req, res) => {

//     const rawUserData = fs.readFileSync("src/db/users.json")

//     const user = JSON.parse(rawUserData)

//     user.push(req.body)

//     fs.writeFileSync("src/db/users.json", JSON.stringify(user))

    


//     res.send('success')
// }