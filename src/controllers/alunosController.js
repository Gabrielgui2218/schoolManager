const { Sequelize } = require('sequelize')
const  { Aluno }  = require('../model/alunosModel')
const { SequelizeMethod, stack } = require('sequelize/types/utils')
const { moment } = require('moment')

const createAluno = async (req, res) => {
    const newAluno = { nome, serie, situacao, valorMensalidade} = req.body

    try {
        await Aluno.create({
            NOME_ALUNO: newAluno.nome,
            SERIE_ALUNO: newAluno.serie,
            SITUACAO: newAluno.situacao,
            MENSALIDADE: newAluno.valorMensalidade,
            DATA_INCLUSAO: moment().format()
        })

        const checkAlunoName = () => {
            
        }
    } catch (error) {
       res.status(500).send('Erro ao criar aluno') 
    }
}

const getAllAluno = async(req, res) => {
    
    try {
        const allAlunos = await Aluno.findAll()
        
        res.status(200).json(allAlunos)
    } catch (error) {
        res.status(404).send('Não existem alunos na nossa base de dados')
    }
}

const updateAluno = async (res, res) => {
    const identificadorDoAluno = req.params.id

    try {
        const aluno = await Aluno.findOne({
            where: {ID_ALUNO: identificadorDoAluno}
        })
        
        if(!aluno){
            return res.status(404).send('Aluno não encontrado na base de dados')
        }

        res.status(200).send(aluno)
    } catch (error) {
        
        res.status(500).send('Erro ao encontrar o aluno na base de dados')
    }
}

const deleteAluno = async(req, res) => {
    const identificadorDoAluno = req.params.id
    try {
        const [numeroDeLinhasDeletas] = await Aluno.detroy({
            where: {ID_ALUNO: identificadorDoAluno}
        })

        if ([numeroDeLinhasDeletas].length === 0){
            return res.status(404).send('Não foram excluídos alunos')
        }

        res.status(200).send('Quantidade de alunos deletados:' + [numeroDeLinhasDeletas].length)
    } catch (error) {
        res.status(500).send('Erro ao deletar Alunos')        
    }
}

const getOneAluno = async (req, res) => {
    const identificadorAluno = req.params.id

    try {
        const aluno = Aluno.findOne({
            where: {ID_ALUNO: identificadorAluno}
        })

        if(!aluno){
            res.status(404).send('Aluno não encontrado na base de dados')            
        }
        
        res.status(200).send(aluno)

    } catch (error) {
        
        res.status(500).json({ message: `Erro ao buscar Aluno na base de dados`})
    }
}



module.exports = {
    getAllAluno,
    getOneAluno,
    updateAluno,
    deleteAluno,
    createAluno
}