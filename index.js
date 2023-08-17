const express = require('express')
const connectDB = require('./src/config/dbConfig');
const app = express()
const { getAllAluno, updateAluno, deleteAluno, createAluno, getOneAluno } = require('./src/controllers/alunosController')
require('dotenv').config();

app.use(express.json())

app.listen(PORT, () =>{
    console.log(`Server is running on port: ${PORT}`);
})


app.get('/alunos', getAllAluno)

app.post('/alunos', createAluno)

app.put('/alunos/:id', updateAluno)

app.delete('/alunos/:id', deleteAluno)

app.get('alunos', getOneAluno)


const start = async () =>{
    try {
        await connectDB
        app.listen(PORT, () =>{
            console.log(`Server is running on port: ${PORT}`);
        })
    } catch (error) {
        console.log(error)
    }
}

start()