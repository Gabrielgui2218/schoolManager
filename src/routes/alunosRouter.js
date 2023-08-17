const express = require('express')
const router = express.Router()

const {
    getAllAluno,
    getOneAluno,
    updateAluno,
    deleteAluno,
    createAluno
} = require('../controllers/alunosController')

router.route('/').get(getAllAluno).post(createAluno)
router.route('/:id').get(getOneAluno).patch(updateAluno).delete(deleteAluno)

module.exports = router