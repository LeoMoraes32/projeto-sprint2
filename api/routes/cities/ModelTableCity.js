const Sequelize = require('sequelize')
const instance = require('../../database')

const columns = {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    state: {
        type: Sequelize.ENUM('AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MS', 'MG', 
        'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'),
        allowNull: false,
    }
}

const options = {
    freezeTableName: true,
    tableName: 'cities',
    timestamps: true,
    createdAt: 'dateCreation',
    updatedAt: 'dateUpdate',
    version: 'version'

}

module.exports = instance.define('city', columns, options)