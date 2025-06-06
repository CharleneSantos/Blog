import dotenv from "dotenv";

import { Pool } from "pg";

dotenv.config();

const db_database = process.env.DATABASE;
const db_port = process.env.DB_PORT;
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;
const db_host = process.env.DB_HOST;

const pool = new Pool({
  host: db_host,
  database: db_database,
  port: db_port,
  user: db_user,
  password: db_password,
});

export default pool;
