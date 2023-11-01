import * as dotenv from "dotenv";

dotenv.config();

const { DB_USER, DB_PASSWORD, DB_NAME, DB_SERVER = "localhost" } = process.env;

export const dbConfig = {
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  server: DB_SERVER,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};
