const TableClient = require('./TableClient')

class Client {
    constructor ({ id, fullName, gender, birthDate, age, city, dateCreation, dateUpdate, version }) {
        this.id = id
        this.fullName = fullName
        this.gender = gender
        this.birthDate = birthDate
        this.age = age
        this.city = city
        this.dateCreation = dateCreation
        this.dateUpdate = dateUpdate
        this.version = version
    }

    async create () {
        const result = await TableClient.insert({
            fullName: this.fullName,
            gender: this.gender,
            birthDate: this.birthDate,
            age: this.age,
            city: this.city 
        })

        this.id = result.id
        this.dateCreation = result.dateCreation
        this.dateUpdate = result.dateUpdate
        this.version = result.version
    }

    async loadById () {
        const found = await TableClient.takeById(this.id)
        this.fullName = found.fullName
        this.gender = found.gender
        this.birthDate = found.birthDate
        this.age = found.age
        this.city = found.city
        this.createdAt = found.createdAt
        this.dateUpdate = found.dateUpdate       
    }

    async loadByName () {
        const found = await TableClient.takeByName(this.fullName)
        this.id = found.id
        this.gender = found.gender
        this.birthDate = found.birthDate
        this.age = found.age
        this.city = found.city
        this.createdAt = found.createdAt
        this.dateUpdate = found.dateUpdate 
    }

    remove () {
        return TableClient.remove(this.id)
    }

    async update () {
        await TableClient.takeById(this.id)
        const fields = ['fullName','gender','birthDate', 'age', 'city']
        const dateToUpdate = {}

        fields.forEach((field) => {
            const value = this[field]

            if (typeof value === 'string' && value.length > 0) {
                dateToUpdate[field] = value
            }
        })

        if(Object.keys(dateToUpdate).length === 0) {
            throw new Error('No data to update was provided.')
        }

        await TableClient.update(this.id, dateToUpdate)
    }
}

module.exports = Client