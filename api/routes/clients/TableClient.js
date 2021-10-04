const Model = require('./ModelTableClient')

module.exports = {
    list () {
        return Model.findAll()
    },

    insert (client){
        return Model.create(client)
    },

    async takeById (id) {
        const found = await Model.findOne({
            where: {
                id: id
            }
        })

        if(!found ) {
            throw new Error('Client not found')
        }

        return found
    },

    async takeByName (fullName) {
        const found = await Model.findAll({
            where: {
                fullName: fullName
            }
        })

        if(!found ) {
            throw new Error('Client not found')
        }
        
        return found
    },

    remove (id) {
        return Model.destroy({
            where: { id:id }
        })
    },

    update (id, dateToUpdate) {
        return Model.update(
            dateToUpdate,
            {
                where: { id: id }
            }
        )
        
    }
}