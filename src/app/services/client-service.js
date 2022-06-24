const mysqlHelper = require('../../shared/helpers/mysql-helper')
const querysClients = require('../../shared/utils/get-client-util')

module.exports = {
    async loadGetClientService() {
        try {
            console.log('Disparanando busca de dados no Mysql', {
                destination: 'Mysql',
                origin: 'DATA',
            })
            const query = await querysClients.queryGetClient()
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
    async loadGetClientIdService(context) {
        try {
            let query = null
            query = await querysClients.queryClientId(context)
            console.log('Disparanando busca de dados no Mysql', {
                query, context,
                destination: 'Mysql',
                origin: 'DATA',
            })
            const startTime = new Date()
            const getClientId = await mysqlHelper.simpleExecute(query)
            const endTime = new Date()
            console.log('Retornando busca de dados no Mysql', {
                query, context,
                destination: 'mysql',
                origin: 'DATA',
                responseTime: endTime - startTime
            })
            return getClientId
        } catch (error) {
            console.log(`Ocorreu um erro ao busca de dados no mysql: ${error.message}`, {
                query, context,
                destination: 'mysql',
                origin: 'DATA',
            })
            throw error
        }
    },
    async loadPutClientIdService(context) {
        try {
            let query = null
            query = await querysClients.queryPutClientId(context)
            console.log('Disparanando busca de dados no Mysql', {
                query, context,
                destination: 'Mysql',
                origin: 'DATA',
            })
            const startTime = new Date()
            await mysqlHelper.simpleExecute(query)
            const endTime = new Date()
            console.log('Retornando busca de dados no Mysql', {
                query, context,
                destination: 'Mysql',
                origin: 'DATA',
                responseTime: endTime - startTime
            })
        } catch (error) {
            console.log(`Ocorreu um erro ao busca de dados no Mysql ${error}`, {
                query, context,
                destination: 'Mysql',
                origin: 'DATA',
            })
            throw error
        }
    },
    async loadPostClientService(context) {
        try {
            let query = null
            query = await querysClients.queryPostClient(context)
            console.log('Disparanando busca de dados no Mysql', {
                query, context,
                destination: 'Mysql',
                origin: 'DATA',
            })
            const startTime = new Date()
            await mysqlHelper.simpleExecute(query)
            const endTime = new Date()
            console.log('Retornando busca de dados no Mysql', {
                query, context,
                destination: 'Mysql',
                origin: 'DATA',
                responseTime: endTime - startTime
            })
        } catch (error) {
            console.log(`Ocorreu um erro ao busca de dados no Mysql ${error}`, {
                destination: 'Mysql',
                origin: 'DATA',
            })
            throw error
        }
    },
    async loadDeleteClientIdService(context) {
        try {
            let query = null
            query = await querysClients.queryDeleteClientId(context)
            console.log('Disparanando busca de dados no Mysql', {
                query, context,
                destination: 'Mysql',
                origin: 'DATA',
            })
            const startTime = new Date()
            await mysqlHelper.simpleExecute(query)
            const endTime = new Date()
            console.log('Retornando busca de dados no Mysql', {
                query, context,
                destination: 'Mysql',
                origin: 'DATA',
                responseTime: endTime - startTime
            })
        } catch (error) {
            console.log(`Ocorreu um erro ao busca de dados no Mysql ${error.message}`, {
                query, context,
                destination: 'Mysql',
                origin: 'DATA',
            })
            throw error
        }
    },
}