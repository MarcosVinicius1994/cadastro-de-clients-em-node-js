const mysqlHelper = require('../../shared/helpers/mysql-helper')
const querysClients = require('../../shared/utils/get-client-util')

module.exports = {
    async loadGetClientService() {
        try {
            const query = await querysClients.queryGetClient()
            const getClients = await mysqlHelper.simpleExecute(query)
            return getClients
        } catch (error) {
            throw error
        }
    },
    async loadGetClientIdService(context) {
        try {
            let query = null
            query = await querysClients.queryClientId(context)
            const getClientId = await mysqlHelper.simpleExecute(query)
            return getClientId
        } catch (error) {
            throw error
        }
    },
    async loadPutClientIdService(context) {
        try {
            let query = null
            query = await querysClients.queryPutClientId(context)
            await mysqlHelper.simpleExecute(query)
        } catch (error) {
            throw error
        }
    },
    async loadPostClientService(context) {
        try {
            let query = null
            query = await querysClients.queryPostClient(context)
            await mysqlHelper.simpleExecute(query)
        } catch (error) {
            throw error
        }
    },
    async loadDeleteClientIdService(context) {
        try {
            let query = null
            query = await querysClients.queryDeleteClientId(context)
            await mysqlHelper.simpleExecute(query)
        } catch (error) {
            throw error
        }
    },
}