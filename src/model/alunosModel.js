const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('sqlite::memory:');

const Aluno = sequelize.define('Aluno', {
    ID_ALUNO: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    NOME_ALUNO: {
        type: DataTypes.STRING,
        allowNull: false
    },
    SERIE_ALUNO: {
      type: DataTypes.INTEGER,
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
   
 