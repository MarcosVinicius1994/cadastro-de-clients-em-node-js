const { Router } = require('express')
const { celebrate, Joi, Segments } = require('celebrate')
const expressCallback = require('../utils/express-callback')
const productsFavoritesController = require('../controllers/product-favorites-controller ')
const productFavoritesRouter = Router()

productFavoritesRouter.get('/id',
    celebrate({
        [Segments.QUERY]: {
            idCustomers: Joi.number()
                .required()
                .messages({
                    'number.baseq3': 'Param id needs to be a number',
                    'any.required': 'Define any required',
                    'number.empty': 'Define any number',
                    'number.pattern': 'Define any number inside pattern'
                }),
        }
    }),
    expressCallback(productsFavoritesController.loadListProductsFavoritesController))
module.exports = productFavoritesRouter