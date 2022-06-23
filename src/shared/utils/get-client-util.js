module.exports = {
    async queryGetClient() {
        const query = `SELECT * FROM cadastros.Customers`
        return query
    },
    async queryClientId(context) {
        let query = `SELECT * FROM cadastros.Customers`
        query += ' WHERE Id = ' + context.id
        return query
    },
    async queryPostClient(context) {
        let query = `INSERT INTO cadastros.Customers(Name, Address)`
        query += ` VALUES ('${context.name}', '${context.address}')`
        return query
    },
    async queryDeleteClientId(context) {
        let query = `DELETE FROM cadastros.Customers`
        query += ` WHERE Id = ${context.id}`
        return query
    },
    async queryPutClientId(context) {
        let query = `UPDATE cadastros.Customers `
        const queryParam = context.query
        const bodyParam = context.body
        if (bodyParam.name) {
            query += ` SET Name = '${bodyParam.name}'`
        }
        if (bodyParam.name && bodyParam.address) {
            query += `, Address = '${bodyParam.address}'`
        }else if(bodyParam.address) {
            query += ` SET Address = '${bodyParam.address}'`
        }
        query += ` WHERE Id = ${queryParam.id}`
        return query
    }
}