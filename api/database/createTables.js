const models = [
    require('../routes/cities/ModelTableCity'),
    require('../routes/clients/ModelTableClient')
]

async function createTables () {
    for (let count = 0; count < models.length; count++){
        const model = models[count]
        await model.sync()
    }
}
createTables()
