module.exports = {
    async queryListProductsFavoritesId(context){
        let query = `SELECT * FROM cadastros.Customers_Products CP`
        query += ` JOIN cadastros.Products P`
        query += ' ON P.Id = CP.idProducts'
        query += ' AND CP.idCustomers = ' + context.idCustomers
        return query
    },
}