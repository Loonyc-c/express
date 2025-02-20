import { Users } from "../../models/comment.model.js"

const createUsers = async (req, res) => {
    const { name } = req.body
    try {
        const newUser = await Users.create({
            name
        })
        res.send(newUser).status(200)
    } catch (error) {
        console.log("error", error)
        res.send().status(200)
    }
}

export default createUsers