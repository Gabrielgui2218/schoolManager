const express = require('express')
const connectDB = require('./src/config/dbConfig');
const app = express()
require('dotenv').config();
const alunosRouter = require('./src/routes/alunosRouter')

app.use(express.json())

app.use('/', alunosRouter)

const start = async () =>{
    try {
        await connectDB
        app.listen(process.env.PORT, () =>{
            console.log('Server is running on port:', process.env.PORT);
        })
    } catch (error) {
        console.log(error)
    }
}

start()
