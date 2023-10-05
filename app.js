import express  from "express";

const PORT = 8000

const app = express()

//middle
const get_json = {
    
        "id": "6197f7d7c1b2af0dccecdca2",
        "name": "Fabrizzio",
        "lastname":"Heredia",
      
}

app.use(express.json())  //para que aparezca mi información


app.get('/users', (req, res) => {
    res.json({get_json})
})

app.post('/users', (req, res) => {
    const { body } = req
    res.status(201).json({
        "message": 'Usuario creado', "userInfo": body })
})


app.listen(PORT, () => {
    console.log(`Se esta ejecutando el servidor ${PORT}`)
})