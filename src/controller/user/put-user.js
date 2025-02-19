// import fs from "fs"
// export const putUsers = (req, res) => {
//     const rawUserData = fs.readFileSync("src/db/users.json")
//     let users = JSON.parse(rawUserData)
//     console.log(users[0])
//     users[0].lastName = "King"
//     fs.writeFileSync("src/db/users.json",JSON.stringify(users))
//     res.send('update lastName of first element in users to king !')
// }