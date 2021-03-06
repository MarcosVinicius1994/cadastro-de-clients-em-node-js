
const clientService = require('../services/client-service')

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
            await clientService.loadPutClientIdService(httpRequest)
            return {
                statusCode: 201,
                body: { message: 'client atualizado com sucesso'}
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