import dotenv from "dotenv";
dotenv.config();
import validarEmail from "../utils/validarEmail.js";

const validador = async (req, res, next) => {
  if (req.body && Object.keys(req.body).length > 0) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields must be filled" });
    }

    const result = await validarEmail(email);

    if (result.rowCount > 0) {
      return res.status(400).json({ message: "Email já cadastrado" });
    }
  }
  next();
};

export default validador;
