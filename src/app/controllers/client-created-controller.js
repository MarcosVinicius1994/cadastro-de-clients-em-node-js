
// const { loggerError } = require('../../shared/monitoring/logs/error-logs')
// const { tracelogs} = require('../../shared/monitoring/logs/trace-logs')
const clientService = require('../services/client-created-service')

module.exports = {
    async loadGetClientController() {
        try {
            const clients = await clientService.loadGetClientService()
            lista = clients
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
    async loadGetClientIdController(httpRequest) {
        try {
            let lista = null
            const client = await clientService.loadGetClientIdService(httpRequest.query)
            lista = client
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

    async loadPutClientIdController(httpRequest) {
        try {
            await clientService.loadPutClientIdService(httpRequest.body)
            return {
                statusCode: 201,
                body: 'client atualizado com sucesso'
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: { message: error }

            }
        }
    },

    async loadPostClientController(httpRequest) {
        try {
            await clientService.loadPostClientService(httpRequest.body)
            return {
                statusCode: 201,
                body: { message: 'Client criado com sucesso' }
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: { message: error }

            }
        }
    },
    async loadDeleteClientIdController(httpRequest) {
        try {
            // traceLogs(`Busca de cep solicitada`)
            await clientService.loadDeleteClientIdService(httpRequest.query)
            return {
                statusCode: 201,
                body: 'client deletado com sucesso'
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: { message: error }

            }
        }
    },
}