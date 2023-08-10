const { Sequelize } = require('sequelize')
const  { Aluno }  = require('../model/alunosModel')
const { SequelizeMethod } = require('sequelize/types/utils')
const { moment } = require('moment')

const getAllAlunos = async (req, res) => {
    const newAluno = { nome, serie, situacao, valorMensalidade} = req.body

    try {
        await Aluno.create({
            NOME_ALUNO: newAluno.nome,
            SERIE_ALUNO: newAluno.serie,
            SITUACAO: newAluno.situacao,
            MENSALIDADE: newAluno.valorMensalidade,
            DATA_INCLUSAO: moment().format()
        })
    } catch (error) {
       res.status(404).send('Usuários já existe na base') 
    }
}

const getOneAluno = async(req, res) => {
    try {
        const allAlunos = Aluno.findAll()
        console.log(allAlunos.every(aluno => aluno instanceof Aluno)); // true
        console.log("All users:", JSON.stringify(allAlunos, null, 2));
    } catch (error) {
        
    }
}

const updateAluno = () => {

    try {
        
    } catch (error) {
        
    }
}

const deleteAluno = () => {
    try {
        
    } catch (error) {
        
    }
}

module.exports = {
    getAllAlunos,
    getOneAluno,
    updateAluno,
    deleteAluno
}