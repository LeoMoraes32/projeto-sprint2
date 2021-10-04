const router = require('express').Router()
const TableCity = require('./TableCity')
const City = require('./City')

router.get('/', async (req, res) => {
    const results = await TableCity.list()
    res.send(
        JSON.stringify(results)
    )
})

router.post('/', async (req, res) => {
    const dataReceived = req.body
    const city = new City(dataReceived)
    await city.create()
    res.send(
        JSON.stringify(city)
    )
})

router.get('/:name', async (req, res) => {
    try{
        const name = req.params.name
        const city = new City({ name: name })
        await city.loadName()
        res.send(
            JSON.stringify(city)
        )
    } catch (error) {
        res.send(
            JSON.stringify({
                message: error.message
            })
        )
    }
})

router.get('/:state', async (req, res) => {
    try{
        const state = req.params.state
        const city = new City({ state: state })
        await city.loadState()
        res.send(
            JSON.stringify(city)
        )
    } catch (error) {
        res.send(
            JSON.stringify({
                message: error.message
            })
        )
    }
})

module.exports = router