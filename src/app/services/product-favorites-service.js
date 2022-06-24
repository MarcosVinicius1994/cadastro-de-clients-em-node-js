const mysqlHelper = require('../../shared/helpers/mysql-helper')
const querysProductsFavorites = require('../../shared/utils/list-products-favorites')

module.exports = {
    async loadListProductsFavoritesIdService(context){
        try {
            const query = await querysProductsFavorites.queryListProductsFavoritesId(context)
            const getProductsFavorites = await mysqlHelper.simpleExecute(query)
            return getProductsFavorites
        } catch (error) {
            throw error
        }
    },
}