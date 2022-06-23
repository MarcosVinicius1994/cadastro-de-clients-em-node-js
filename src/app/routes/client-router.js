const { Router } = require('express')
const { celebrate, Joi, Segments } = require('celebrate')
const expressCallback = require('../utils/express-callback')
const clientController = require('../controllers/client-created-controller')
const { loadPutClientIdController } = require('../controllers/client-created-controller')
const clientRouter = Router()

clientRouter.get('/',
    expressCallback(clientController.loadGetClientController))

clientRouter.get('/id',
    celebrate({
        [Segments.QUERY]: {
            id: Joi.number()
                .required()
                .messages({
                    'number.baseq3': 'Param id needs to be a number',
                    'any.required': 'Define any required',
                    'number.empty': 'Define any number',
                    'number.pattern': 'Define any number inside pattern'
                }),
        }
    }),
    expressCallback(clientController.loadGetClientIdController))

clientRouter.put('/id',
    celebrate({
        [Segments.QUERY]: {
            id: Joi.number()
                .required()
                .messages({
                    'number.baseq3': 'Param id needs to be a number',
                    'any.required': 'Define any required',
                    'number.empty': 'Define any number',
                    'number.pattern': 'Define any string inside pattern'
                }),
        },
        [Segments.BODY]: {
            name: Joi.string()
                .optional()
                .messages({
                    'string.baseq3': 'Param name needs to be a string',
                    'string.empty': 'Define any string',
                    'string.pattern': 'Define any string inside pattern'
                }),
            address: Joi.string()
                .required()
                .messages({
                    'string.baseq3': 'Param address needs to be a string',
                    'any.required': 'Define any required',
                    'string.empty': 'Define any string',
                    'string.pattern': 'Define any string inside pattern'
                }),
        },
    }),
    expressCallback(loadPutClientIdController))

clientRouter.post('/',
    celebrate({
        [Segments.BODY]: {
            name: Joi.string()
                .required()
                .messages({
                    'string.baseq3': 'Param name needs to be a string',
                    'any.required': 'Define any required',
                    'string.empty': 'Define any string',
                    'string.pattern': 'Define any string inside pattern'
                }),
            address: Joi.string()
                .required()
                .messages({
                    'string.baseq3': 'Param address needs to be a string',
                    'any.required': 'Define any required',
                    'string.empty': 'Define any string',
                    'string.pattern': 'Define any string inside pattern'
                }),
        },
    }),
    expressCallback(clientController.loadPostClientController))

clientRouter.delete('/id',
    celebrate({
        [Segments.QUERY]: {
            id: Joi.number()
                .required()
                .messages({
                    'number.baseq3': 'Param id needs to be a number',
                    'any.required': 'Define any required',
                    'number.empty': 'Define any number',
                    'number.pattern': 'Define any number inside pattern'
                }),
        },
    }),
    expressCallback(clientController.loadDeleteClientIdController))

module.exports = clientRouter