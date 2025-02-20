import { Users } from "../../models/comment.model.js"

const deleteUser = async (req,res) => {

    const {id} = req.body

    try{
        const deleteUser = await Users.deleteOne({_id:id})
        res.send({ deleteUser })
    }catch(error) {
        console.log("error", error)
        res.send().status(200)
    }
}


export default deleteUser
