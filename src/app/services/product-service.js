const mysqlHelper = require('../../shared/helpers/mysql-helper')
const querysProducts = require('../../shared/utils/list-products')

module.exports = {
    async loadListProductService() {
        try {
            const query = await querysProducts.queryListPrroducts()
            const getProducts = await mysqlHelper.simpleExecute(query)
            return getProducts
        } catch (error) {
            throw error
        }
    },
    async loadListProductIdService(context){
        try {
            const query = await querysProducts.queryListPrroductId(context)
            const getProducts = await mysqlHelper.simpleExecute(query)
            return getProducts
        } catch (error) {
            throw error
        }
    },
}