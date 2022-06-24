const mysqlHelper = require('../../shared/helpers/mysql-helper')
const querysProducts = require('../../shared/utils/list-products')

module.exports = {
    async loadListProductService() {
        try {
            console.log('Disparanando busca de dados no Mysql', {
                destination: 'Mysql',
                origin: 'DATA',
            })
            const query = await querysProducts.queryListPrroducts()
            const startTime = new Date()
            const getClients = await mysqlHelper.simpleExecute(query)
            const endTime = new Date().getTime
            console.log('Retornando busca de dados no Mysql', {
                destination: 'mysql',
                origin: 'DATA',
                responseTime: startTime - endTime
            })
            return getClients
        } catch (error) {
            console.log(`Ocorreu um erro ao busca de dados no Mysql ${error.message}`, {
                destination: 'Mysql',
                origin: 'DATA',
            })
            throw error
        }
    },
    async loadListProductIdService(context){
        try {
            console.log('Disparanando busca de dados no Mysql', {
                destination: 'Mysql',
                origin: 'DATA',
            })
            const query = await querysProducts.queryListPrroductId(context)
            const startTime = new Date()
            const getClients = await mysqlHelper.simpleExecute(query)
            const endTime = new Date().getTime
            console.log('Retornando busca de dados no Mysql', {
                destination: 'mysql',
                origin: 'DATA',
                responseTime: startTime - endTime
            })
            return getClients
        } catch (error) {
            console.log(`Ocorreu um erro ao busca de dados no Mysql ${error.message}`, {
                destination: 'Mysql',
                origin: 'DATA',
            })
            throw error
        }
    },
}