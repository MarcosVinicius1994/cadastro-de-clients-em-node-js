
const productService = require('../services/product-service')

module.exports = {
    async loadListProductsController() {
        try {
            const products = await productService.loadListProductService()
            lista = products
            return {
                statusCode: 200,
                body: { lista }
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: { message: error }

            }
        }
    },
    async loadListProductIdController(httpRequest) {
        try {
            const products = await productService.loadListProductIdService(httpRequest.query)
            lista = products
            return {
                statusCode: 200,
                body: { lista }
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: { message: error }

            }
        }
    },
}