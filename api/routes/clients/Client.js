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
}

module.exports = Client