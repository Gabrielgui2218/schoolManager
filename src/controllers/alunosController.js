const Aluno  = require('../model/alunosModel')
const moment = require('moment');

const createAluno = async (req, res) => {
    const { nome, serie, situacao, valorMensalidade } = req.body

    try {
        await Aluno.create({
            NOME_ALUNO: nome,
            SERIE_ALUNO: serie,
            SITUACAO: situacao,
            MENSALIDADE: valorMensalidade,
            DATA_INCLUSAO: new Date()
        })

        res.status(201).json({ message: 'Aluno criado com sucesso' })
        
    } catch (error) {
        console.error('Error creating aluno:', error);
        res.status(500).json({ error: error.message });
    }
}

const getAllAluno = async(req, res) => {
    
    try {
        const allAlunos = await Aluno.findAll()
        
        res.status(200).json(allAlunos)
    } catch (error) {
        res.status(404).send(error.message)
    }
}

const updateAluno = async (req, res) => {
    const identificadorDoAluno = req.params.id

    try {
        const aluno = await Aluno.findOne({
            where: {ID_ALUNO: identificadorDoAluno}
        })
        
        if(!aluno){
            return res.status(404).send(error.message)
        }

        res.status(200).send(aluno)
    } catch (error) {
        
        res.status(500).send('Erro ao encontrar o aluno na base de dados')
    }
}

const deleteAluno = async(req, res) => {
    const identificadorDoAluno = req.params.id
    try {
        await Aluno.destroy({
            where: {ID_ALUNO: identificadorDoAluno}
        })

        res.status(200).send('ID_ALUNO deletado: ' + identificadorDoAluno)

    } catch (error) {
        res.status(500).send(error.message)        
    }
}

const getOneAluno = async (req, res) => {
    const identificadorAluno = req.params.id

    try {
        const aluno = await Aluno.findOne({
            where: {ID_ALUNO: identificadorAluno}
        })

        if(!aluno){
            res.status(404).send('Aluno não encontrado na base de dados')            
        }
        
        res.status(200).json({aluno})

    } catch (error) {
        
        res.status(500).json({message: error.message})
    }
}



module.exports = {
    getAllAluno,
    getOneAluno,
    updateAluno,
    deleteAluno,
    createAluno
}