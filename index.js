const express = require('express')
const bodyParser = require('body-parser');
const connectDB = require('./src/config/dbConfig');
const app = express()

const PORT = 3000

const alunos = []

app.use(bodyParser.json())

app.listen(PORT, () =>{
    console.log(`Server is running on port: ${PORT}`);
})


app.get('/alunos', (req, res) => {
    res.send(alunos)
})

app.post('/alunos', (req, res) => {
    const { id, name, age } = req.body

    alunos.push({
        id: id,
        name: name,
        age: age
    })

    res.send('Aluno Cadastrado com sucesso').status(204)
})

app.put('/alunos/:id', (req, res) => {
    const { id } = req.params


})

app.delete('/alunos/:id', (req, res) => {
    const { id } = req.params
})

const start = async () =>{
    try {
        await connectDB
    } catch (error) {
        console.log(error)
    }
}

start()