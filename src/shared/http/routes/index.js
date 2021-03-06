const { Router } = require('express')

const pjson = require('../../../../package.json')
const clientRouter = require('../../../app/routes/client-router')
const productRouter = require('../../../app/routes/product-router')
const productFavoritesRouter = require('../../../app/routes/product-favorites-router ')

const routes = Router()

routes.get('/api/health', (req, res) => {
    return res.json({
        name: pjson.name,
        version: pjson.version,
        ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
        UserAgent: req.get('User-Agent'),
        url: req.url,
        host: req.hostName,
        baseUrl: req.baseUrl,
        method: req.method,
    })
})

routes.get('/', (req, res) => {
    return res.json({ message: 'Olá serviço de crud para clients' })
})

routes.use('/v1/api/clients', clientRouter)
routes.use('/v1/api/products/', productRouter)
routes.use('/v1/api/products/favorites', productFavoritesRouter)

module.exports = routes
