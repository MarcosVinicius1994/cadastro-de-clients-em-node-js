const mysqlHelper = require('../../shared/helpers/mysql-helper')
const querysClients = require('../../shared/utils/get-client-util')

module.exports = {
    async loadGetClientService() {
        try {
            console.log('Disparanando busca de Clients no Mysql', {
                destination: 'Mysql',
                origin: 'loadGetClientService',
            })
            const query = await querysClients.queryGetClient()
            const startTime = new Date()
            const getClients = await mysqlHelper.simpleExecute(query)
            const endTime = new Date().getTime
            console.log('Retornando busca de Clients no Mysql', {
                destination: 'mysql',
                origin: 'loadGetClientService',
                responseTime: startTime - endTime
            })
            return getClients
        } catch (error) {
            console.log(`Ocorreu um erro ao busca de Clients no Mysql ${error.message}`, {
                destination: 'Mysql',
                origin: 'loadGetClientService',
            })
            throw error
        }
    },
    async loadGetClientIdService(context) {
        try {
            let query = null
            query = await querysClients.queryClientId(context)
            console.log('Disparanando busca de Clients por ID no Mysql', {
                query, context,
                destination: 'Mysql',
                origin: 'loadGetClientIdService',
            })
            const startTime = new Date()
            const getClientId = await mysqlHelper.simpleExecute(query)
            const endTime = new Date()
            console.log('Retornando busca de Clients por ID no Mysql', {
                query, context,
                destination: 'mysql',
                origin: 'loadGetClientIdService',
                responseTime: endTime - startTime
            })
            return getClientId
        } catch (error) {
            console.log(`Ocorreu um erro ao busca de Clients por ID no mysql: ${error.message}`, {
                query, context,
                destination: 'mysql',
                origin: 'loadGetClientIdService',
            })
            throw error
        }
    },
    async loadPutClientIdService(context) {
        try {
            let query = null
            query = await querysClients.queryPutClientId(context)
            console.log('Disparanando atualizacao de Clients por ID no Mysql', {
                query, context,
                destination: 'Mysql',
                origin: 'loadPutClientIdService',
            })
            const startTime = new Date()
            await mysqlHelper.simpleExecute(query)
            const endTime = new Date()
            console.log('Retornando busca de atualizacao de Clients por ID no Mysql', {
                query, context,
                destination: 'Mysql',
                origin: 'loadPutClientIdService',
                responseTime: endTime - startTime
            })
        } catch (error) {
            console.log(`Ocorreu um erro ao  atualizar Clients por IDs no Mysql ${error}`, {
                query, context,
                destination: 'Mysql',
                origin: 'loadPutClientIdService',
            })
            throw error
        }
    },
    async loadPostClientService(context) {
        try {
            let query = null
            query = await querysClients.queryPostClient(context)
            console.log('Disparanando criacao de Clientes no Mysql', {
                query, context,
                destination: 'Mysql',
                origin: 'loadPostClientService',
            })
            const startTime = new Date()
            await mysqlHelper.simpleExecute(query)
            const endTime = new Date()
            console.log('Retornando criacao de Clientes no Mysql', {
                query, context,
                destination: 'Mysql',
                origin: 'loadPostClientService',
                responseTime: endTime - startTime
            })
        } catch (error) {
            console.log(`Ocorreu um erro criar de Clientes no Mysql ${error}`, {
                destination: 'Mysql',
                origin: 'loadPostClientService',
            })
            throw error
        }
    },
    async loadDeleteClientIdService(context) {
        try {
            let query = null
            query = await querysClients.queryDeleteClientId(context)
            console.log('Deletando Clientes por Id no Mysql', {
                query, context,
                destination: 'Mysql',
                origin: 'loadDeleteClientIdService',
            })
            const startTime = new Date()
            await mysqlHelper.simpleExecute(query)
            const endTime = new Date()
            console.log('Retornando delete de Clientes por Id no Mysql', {
                query, context,
                destination: 'Mysql',
                origin: 'loadDeleteClientIdService',
                responseTime: endTime - startTime
            })
        } catch (error) {
            console.log(`Ocorreu um erro ao deletar de Clientes por Id no Mysql ${error.message}`, {
                query, context,
                destination: 'Mysql',
                origin: 'loadDeleteClientIdService',
            })
            throw error
        }
    },
}