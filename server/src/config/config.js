module.exports={
    port:process.env.PORT|| 8081,
    db: {
        database:process.env.DB_NAME || '3MgvFICclt',
        user: process.env.DB_USER || '3MgvFICclt',
        password:process.env.DB_PASS || 'eJiCoKDjMz',
        option: {
            dialect:process.env.DIALECT || 'mysql',
            host : process.env.HOST || 'remotemysql.com'
        }
    }
}