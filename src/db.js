import pg from 'pg'
import 'dotenv/config'

const { Client } = pg

const client = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

//module.exports = pool;
await client.connect()
export default client;