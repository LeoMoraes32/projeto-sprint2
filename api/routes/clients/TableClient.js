const Model = require('./ModelTableClient')

module.exports = {
    list () {
        return Model.findAll()
    },

    insert (client){
        return Model.create(client)
    }
}