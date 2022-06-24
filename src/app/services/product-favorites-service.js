const mysqlHelper = require('../../shared/helpers/mysql-helper')
const querysProductsFavorites = require('../../shared/utils/list-products-favorites')

module.exports = {
    async loadListProductsFavoritesIdService(context){
        try {
            console.log('Disparanando busca de produtos no Mysql', {
                destination: 'Mysql',
                origin: 'loadListProductsFavoritesIdService',
            })
            const query = await querysProductsFavorites.queryListProductsFavoritesId(context)
            const startTime = new Date()
            const getClients = await mysqlHelper.simpleExecute(query)
            const endTime = new Date().getTime
            console.log('Retornando busca de produtos no Mysql', {
                destination: 'mysql',
                origin: 'loadListProductsFavoritesIdService',
                responseTime: startTime - endTime
            })
            return getClients
        } catch (error) {
            console.log(`Ocorreu um erro ao buscar produtos no Mysql ${error.message}`, {
                destination: 'Mysql',
                origin: 'loadListProductsFavoritesIdService',
            })
            throw error
        }
    },
}