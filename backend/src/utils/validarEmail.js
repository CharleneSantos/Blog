import pool from "../connection.js";

const validarEmail = async (email) => {
  const query = "select * from users where email = $1";
  const params = [email];

  return await pool.query(query, params);
};

export default validarEmail;
