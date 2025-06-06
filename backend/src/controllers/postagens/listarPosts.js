import pool from "../../database.js";

const listarPosts = async (req, res) => {
  try {
    // console.log(process.env.DATABASE);
    const listaPosts = await pool.query("select * from postagens");
    return res.status(200).send(listaPosts.rows);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
export default listarPosts;
