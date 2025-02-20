import { Users } from "../../models/comment.model.js"

const updateUser = async (req,res) => {
    const {id} = req.body

    try{
        const updatedUser = await Users.updateOne({_id:id},{name:"mkmkmkm"})
        res.send({ updatedUser })
    }catch(error) {
        console.log("error", error)
        res.send().status(200)
    }
}


export default updateUser
