const mysqlHelper = require('../../shared/helpers/mysql-helper')
const querysClients = require('../../shared/utils/get-client-util')

module.exports = {
    async loadGetClientService( ) {
        try {
            console.log('Disparanando busca de dados no mongoDB', {
                destination: 'mongodb',
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
            console.log(`Ocorreu um erro ao busca de dados no mongoDB ${error.message}`, {
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
            console.log('Disparanando busca de dados no mongoDB', {
                query, context,
                destination: 'mongodb',
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
            // query = await querySearchConfig(context)
            console.log('Disparanando busca de dados no mongoDB', {
                query, context,
                destination: 'mongodb',
                origin: 'DATA',
            })
            // const startTime = new Date()
            // const getCollection = await MongoHelper.getCollection('config')
            // const data = //atualiza o mysql
            // const endTime = new Date()
            console.log('Retornando busca de dados no mongoDB', {
                query, context,
                destination: 'mongodb',
                origin: 'DATA',
                responseTime: endTime - startTime
            })
            // return data
        } catch (error) {
            console.log(`Ocorreu um erro ao busca de dados no mongoDB ${error.message}`, {
                query, context,
                destination: 'mongodb',
                origin: 'DATA',
            })
            throw error
        }
    },
    async loadPostClientService(context) {
        try {
            let query = null
            query = await querysClients.queryPostClient(context)
            console.log('Disparanando busca de dados no mongoDB', {
                query, context,
                destination: 'mongodb',
                origin: 'DATA',
            })
            const startTime = new Date()
            const postClient = await mysqlHelper.simpleExecute(query)
            const endTime = new Date()
            console.log('Retornando busca de dados no mongoDB', {
                query, context,
                destination: 'mongodb',
                origin: 'DATA',
                responseTime: endTime - startTime
            })
            return postClient
        } catch (error) {
            console.log(`Ocorreu um erro ao busca de dados no mongoDB ${error.message}`, {
                query, context,
                destination: 'mongodb',
                origin: 'DATA',
            })
            throw error
        }
    },
    async loadDeleteClientIdService(context) {
        try {
            let query = null
            // query = await querySearchConfig(context)
            console.log('Disparanando busca de dados no mongoDB', {
                query, context,
                destination: 'mongodb',
                origin: 'DATA',
            })
            // const startTime = new Date()
            // const getCollection = await MongoHelper.getCollection('config')
            // const data = //deleta um client
            // const endTime = new Date()
            console.log('Retornando busca de dados no mongoDB', {
                query, context,
                destination: 'mongodb',
                origin: 'DATA',
                responseTime: endTime - startTime
            })
            // return data
        } catch (error) {
            console.log(`Ocorreu um erro ao busca de dados no mongoDB ${error.message}`, {
                query, context,
                destination: 'mongodb',
                origin: 'DATA',
            })
            throw error
        }
    },
}