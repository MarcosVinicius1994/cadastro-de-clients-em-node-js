const { Router } = require('express')
const { celebrate, Joi, Segments } = require('celebrate')
const expressCallback = require('../utils/express-callback')
const productsController = require('../controllers/product-list-controller')
const productRouter = Router()

productRouter.get('/',
    expressCallback(productsController.loadListProductsController))

    productRouter.get('/id',
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
    expressCallback(productsController.loadListProductIdController))
module.exports = productRouter