module.exports={
    port:process.env.PORT|| 8081,
    dbold: {
        database:process.env.DB_NAME || 'littlewe_achva',
        user: process.env.DB_USER || 'littlewe_achva',
        password:process.env.DB_PASS || 'Achva123!@#',
        option: {
            dialect:process.env.Dialect || 'mysql',
            host : process.env.HOST || '192.116.71.77'

        }
    },
    db: {
        database: 'littlewe_achva',
        username: 'littlewe_achva',
        password: 'Achva123!@#',

            host: 'localhost',
            dialect: 'mysql'

    }
}