const dotenv = require("dotenv");

dotenv.config();

const { MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DBNAME } = process.env;

module.exports = {
    development: {
        username: MYSQL_USER,
        password: MYSQL_PASSWORD,
        database: MYSQL_DBNAME,
        host: MYSQL_HOST,
        port: MYSQL_PORT,
        dialect: "mysql",
    },
};
