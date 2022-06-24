module.exports = {
    async queryListProductsFavoritesId(context){
        let query = `SELECT * FROM cadastros.Customers_Products`
        query += ' WHERE idCustomers = ' + context.idCustomers
        return query
    },
}