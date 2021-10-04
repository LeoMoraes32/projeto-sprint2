const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('config')

app.use(bodyParser.json())

const routerCities = require('./routes/cities')
app.use('/api/cities', routerCities)

const routerClients = require('./routes/clients')
app.use('/api/clients', routerClients)

app.listen(config.get('api.port'), () => console.log('API online!'))
