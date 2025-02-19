// import fs from "fs"


// export const deleteUser = (req, res) => {
//     const rawUserData = fs.readFileSync("src/db/users.json")
//     let users = JSON.parse(rawUserData)

//     // const deleteElIndex = users.findIndex((user) => user.lastName === "King")
//     // users.splice(deleteElIndex, 1)
//     const deleted = users.filter((user)=> user.lastName !=="King")

//     fs.writeFileSync("src/db/users.json",JSON.stringify(deleted))
//     res.send({ users })
// }

