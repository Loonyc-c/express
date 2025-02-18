import { users } from "./create-user.js"
import fs from "fs"

const getUser = (req,res) => {
  const rawUserData = fs.readFileSync("src/db/users.json")
  res.send(rawUserData)
}
export default getUser