const Sequelize = require('sequelize')
const instance = require('../../database')

const columns = {
    fullName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gender: {
        type: Sequelize.ENUM('Masculino', 'Feminino', 'Outro', 'Prefiro não dizer'),
        allowNull: false
    },
    birthDate: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    city: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: require('../cities/ModelTableCity'),
            key: 'id'
        }
    }
}

const options = {
    freezeTableName: true,
    tableName: 'clients',
    timestamps: true,
    createdAt: 'dateCreation',
    updatedAt: 'dateUpdate',
    version: 'version'
}

module.exports = instance.define('client', columns, options)