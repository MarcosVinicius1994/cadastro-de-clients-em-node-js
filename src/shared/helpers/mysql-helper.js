const MySql = require('mysql')
const config = require('../configs/mongo-config')

class MySqlHelper {
    constructor() {
        this.config = config
    }
    async createConnection() {
        const connection = await MySql.createConnection(this.config)
        return connection
    }
    async initialize() {
        this.client = await this.createConnection()
        return this.client
    }

    async close(connected) {
        connected.connection.end()
    }

    // async simpleExecute(execute) {
    //     try {
    //         return new Promise(async (resolve, reject) => {
    //             const conn = await this.initialize()
    //             await conn.connect()
    //             conn.query(
    //                 execute,
    //               (err, result) => {
    //                 console.log(result)[0]
    //                 return err ? reject(err) : resolve(result[0].hexcode);
    //               }
    //             )
    //           })
    //         } catch (error) {
    //         console.log(error)
    //     }
    // }
    async simpleExecute(execute) {
        return new Promise(async (resolve, reject) => {
            const conn = await this.initialize()
            await conn.connect()
            conn.query(
                execute,
                function (err, rows) {
                    if (rows === undefined) {
                        reject(new Error(err.sqlMessage));
                    } else if(err){
                        resolve(err.sqlMessage)
                    }else{
                        resolve(rows);
                    }
                }
            )
        }
        )
    }
}


module.exports = new MySqlHelper()

