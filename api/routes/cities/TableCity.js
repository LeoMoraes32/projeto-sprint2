const Model = require('./ModelTableCity')

module.exports = {
    list () {
        return Model.findAll()
    },

    insert (city) {
        return Model.create(city)
    },

    async loadByName (name) {
        const found = await Model.findOne({
            where: {
                name: name
            }
        })

        if (!found ) {
            throw new Erro('City not found')
        }

        return found
    },

    async loadByState (state) {
        const found = await Model.findAll({
            where: {
                state: state
            }
        })

        if (!found ) {
            throw new Erro('State not found')
        }

        return found
    }
}