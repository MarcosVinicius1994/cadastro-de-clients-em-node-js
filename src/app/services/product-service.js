const mysqlHelper = require('../../shared/helpers/mysql-helper')
const querysProducts = require('../../shared/utils/list-products')

module.exports = {
    async loadListProductService() {
        try {
            console.log('Disparanando busca de produtos no Mysql', {
                destination: 'Mysql',
                origin: 'loadListProductService',
            })
            const query = await querysProducts.queryListPrroducts()
            const startTime = new Date()
            const getClients = await mysqlHelper.simpleExecute(query)
            const endTime = new Date().getTime
            console.log('Retornando busca de produtos no Mysql', {
                destination: 'mysql',
                origin: 'loadListProductService',
                responseTime: startTime - endTime
            })
            return getClients
        } catch (error) {
            console.log(`Ocorreu um erro ao buscar produtos no Mysql ${error.message}`, {
                destination: 'Mysql',
                origin: 'loadListProductService',
            })
            throw error
        }
    },
    async loadListProductIdService(context){
        try {
            console.log('Disparanando busca produtos por Id no Mysql', {
                destination: 'Mysql',
                origin: 'loadListProductIdService',
            })
            const query = await querysProducts.queryListPrroductId(context)
            const startTime = new Date()
            const getClients = await mysqlHelper.simpleExecute(query)
            const endTime = new Date().getTime
            console.log('Retornando busca produtos por Id no Mysql', {
                destination: 'mysql',
                origin: 'loadListProductIdService',
                responseTime: startTime - endTime
            })
            return getClients
        } catch (error) {
            console.log(`Ocorreu um erro ao buscar produtos por Id no Mysql ${error.message}`, {
                destination: 'Mysql',
                origin: 'loadListProductIdService',
            })
            throw error
        }
    },
}