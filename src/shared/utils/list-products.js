module.exports = {
    async queryListPrroducts() {
        const query = `SELECT * FROM cadastros.Products`
        return query
    },
    async queryListPrroductId(context){
        let query = `SELECT * FROM cadastros.Products`
        query += ' WHERE Id = ' + context.id
        return query
    },
}