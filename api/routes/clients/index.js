const router = require('express').Router()
const TableClients = require('./TableClient')
const Clients = require('./Client')

router.get('/', async (req, res) => {
    const results = await TableClients.list()
    res.send(
        JSON.stringify(results)
    )
})

router.post('/', async (req, res) => {
    const dataReceived = req.body
    const client = new Clients(dataReceived)
    await client.create()
    res.send(
        JSON.stringify(client)
    )
})

module.exports = router