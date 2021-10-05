const router = require('express').Router()
const TableCity = require('./TableCity')
const City = require('./City')

router.options('/', (req, res) => {
    res.set('Access-Control-Allow-Methods', 'GET', 'POST')
    res.status(204)
    res.end()
})
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


router.get('/name/:name', async (req, res) => {
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

router.options('/name/:name', (req, res) => {
    res.set('Access-Control-Allow-Methods', 'GET', 'POST')
    res.status(204)
    res.end()
})

router.get('/state/:state', async (req, res) => {
    try{
        const state = req.params.state
        const city = new City({ state: state })
        const result = await city.loadState()
        res.send(
            JSON.stringify(result)
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