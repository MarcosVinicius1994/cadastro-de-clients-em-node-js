
const productFavoritesService = require('../services/product-favorites-service')

module.exports = {
    async loadListProductsFavoritesController(httpRequest) {
        try {
            const productsFavorites = await productFavoritesService.loadListProductsFavoritesIdService(httpRequest.query)
            lista = productsFavorites
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