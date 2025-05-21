import { Pool } from "pg";

const pool = new Pool({
  host: "localhost",
  database: "blog",
  port: 5433,
  user: "postgres",
  password: "1234",
});

export default pool;
