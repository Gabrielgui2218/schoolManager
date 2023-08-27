const express = require('express')
const router = express.Router()
const { getAllAluno, updateAluno, deleteAluno, createAluno, getOneAluno } = require('../controllers/alunosController')

router.get('/alunos', getAllAluno)

router.post('/alunos', createAluno)

router.put('/alunos/:id', updateAluno)

router.delete('/alunos/:id', deleteAluno)

router.get('alunos', getOneAluno)

module.exports = router

