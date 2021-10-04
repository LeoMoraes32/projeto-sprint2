const ModelTableCity = require('../routes/cities/ModelTableCity')
const ModelTableClient = require('../routes/clients/ModelTableClient')

ModelTableCity
    .sync()
    .then(() => console.log('Table CITY created successfully'))
    .catch(console.log)

ModelTableClient
    .sync()
    .then(() => console.log('Table CLIENTS created successfully'))
    .catch(console.log)