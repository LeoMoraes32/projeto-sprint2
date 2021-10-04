const router = require('express').Router()
const TableClients = require('./TableClient')
const Client = require('./Client')

router.get('/', async (req, res) => {
    const results = await TableClients.list()
    res.send(
        JSON.stringify(results)
    )
})

router.post('/', async (req, res) => {
    const dataReceived = req.body
    const client = new Client(dataReceived)
    await client.create()
    res.send(
        JSON.stringify(client)
    )
})

router.get('/:id', async (req, res) => {
    try{
        const id = req.params.id
        const client = new Client({ id: id })
        await client.loadById()
        res.send(
            JSON.stringify(client)
        )
    } catch (error) {
        res.send(
            JSON.stringify({
                message: error.message
            })
        )
    }
})

router.get('/name/:fullName', async (req, res) =>{
    try{
        const fullName = req.params.fullName
        const client = new Client({ fullName: fullName})
        await client.loadByName()
        res.send(
            JSON.stringify(client)
        )
    } catch (error) {
        res.send(
            JSON.stringify({
                message: error.message
            })
        )
    }
})

router.delete('/:id', async (req, res) => {
    try{
        const id = req.params.id
        const client = new Client({ id: id })
        await client.loadById()
        await client.remove()
        res.end()
    } catch (error) {
        res.send(
            JSON.stringify({
                message: error.message
            })
        )
    }
})

router.patch('/:id', async (req, res) => {
    try{
        const id = req.params.id
        const dataReceive = req.body
        const data = Object.assign({}, dataReceive, { id: id })
        const client = new Client(data)
        await client.update()
        res.end()
    } catch (error) {
        res.send(
            JSON.stringify({
                message: error.message
            })
        )
    }
  

})
module.exports = router