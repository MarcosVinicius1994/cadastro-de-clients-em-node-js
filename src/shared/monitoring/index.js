// const winston = require('winston')

// const getConsoleTransport =  require('./transports/console-transports')
// const getElasticsearchTransport = require('./transports/elasticsearch-transports')


// const loggerConfiguration = {
//     transports: [],
// }


// const notRunningTests = process.env.NODE_ENV !== 'test'

// if (notRunningTests) {
//     loggerConfiguration.transports.push(getElasticsearchTransport())
// }

// loggerConfiguration.transports.push(getConsoleTransport())

// const logger = winston.createLogger(loggerConfiguration)

// module.exports = logger