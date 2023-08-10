const { Sequelize, DataType, DataTypes } = require('sequelize')
const { connectDB } = require('../config/dbConfig')

const Aluno = sequelize.define('Aluno', {
    ID_ALUNO: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    NOME_ALUNO: {
        type: DataTypes.String,
        allowNull: false
    },
    SERIE_ALUNO: {
      type: DataTypes.String,
      allowNull: false
    },
    DATA_INCLUSAO: {
        type: DataTypes.STRING,
        allowNull: false
    },
    SITUACAO: {
      type: DataTypes.STRING,
      allowNull: false
    },
    MENSALIDADE: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'alunos_tb'
  })

module.exports = Aluno    
   
 