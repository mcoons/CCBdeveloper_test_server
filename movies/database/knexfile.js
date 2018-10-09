module.exports = {
    development: {
        client: 'mysql',
        connection: {
            host : '127.0.0.1',
            user : 'sakila',
            password : 'sakila',
            database : 'sakila'
        }
    },

    production: {
        client: 'mysql',
        connection: {
            host: process.env.MYSQL_SERVER_PORT_3306_TCP_ADDR,
            user: process.env.MYSQL_SERVER_ENV_MYSQL_USER,
            password: process.env.MYSQL_SERVER_ENV_MYSQL_PASSWORD,
            database: process.env.MYSQL_SERVER_ENV_MYSQL_DATABASE
        }
    }


}