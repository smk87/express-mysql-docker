const dbHost = process.env.DB_HOST || 'localhost';
const dbPort = process.env.DB_PORT || '3306';
const dbUser = process.env.DB_USER || 'root';
const dbPassword = process.env.DB_PASSWORD || 'root';
const dbName = process.env.DB_NAME || 'node_db';

module.exports = {
    HOST: dbHost,
    PORT: dbPort,
    USER: dbUser,
    PASSWORD: dbPassword,
    DB: dbName,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};
