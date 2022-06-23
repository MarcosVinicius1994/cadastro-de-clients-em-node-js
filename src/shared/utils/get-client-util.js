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
        let query = `insert into cadastros.Customers(Name, Address)`
        query += ` VALUES ('${context.name}', '${context.address}')`
        return query
    },
}