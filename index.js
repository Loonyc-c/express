const express = require('express')
const app = express()
const port = 3000

var users = []

app.use(express.json())

app.get('/users', (req, res) => {
    console.log(users);
    
    const { firstName, lastName, password } = req.body
    if (users[0].firstName == firstName && users[0].lastName == lastName && users[0].password == password) {
        res.send("logged")
    } else { res.send("failed") }

})
app.post('/users', (req, res) => {
    const { firstName, lastName,password } = req.body

    // users.push({
    //     firstName:"Tengeriin Tashuur",
    //     lastName:"ATILLA !"
    // })

    // // users.map((age)=>{
    // //     return age
    // // })
    // users.push(
    //  req.body
    // )

    users.push({
        firstName,
        lastName,
        password
    })

    res.send('MONGOLJS')
})
app.put('/users', (req, res) => {
    users[0].lastName = "King"
    res.send('update lastName of first element in users to king !')
})
app.delete('/users', (req, res) => {
    const deleted = users.filter(user => !user.lastName.includes("King"));
    users = deleted;

    res.send('Delte first !')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})