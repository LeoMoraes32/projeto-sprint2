const TableCity = require('./TableCity')

class City {
    constructor ({ id, name, state, dateCreation, dateUpdate, version }) {
        this.id = id
        this.name = name
        this.state = state
        this.dateCreation = dateCreation
        this.dateUpdate = dateUpdate
        this.version = version
    }

    async create () {
        const result = await TableCity.insert({
            name: this.name,
            state: this.state
        })

        this.id = result.id
        this.dateCreation = result.dateCreation
        this.dateUpdate = result.dateUpdate
        this.version = result.version
    }

    async loadName () {
        const found = await TableCity.loadByName(this.name)
        this.name = found.name
        this.state = found.state
       
    }

    async loadState() {
        const found = await TableCity.loadByState(this.state)
        this.name = found.name
        this.state = found.state
        this.dateCreation = found.dateCreation
        this.dateUpdate = found.dateUpdate
        this.version = found.version
    }
}

module.exports = City