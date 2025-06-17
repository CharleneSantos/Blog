import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const autenticadorToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(403).json({ message: "Token não fornecido " });
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(403).json({ message: "Token invalido1 " });
  }
  jwt.verify(token, process.env.SECRET_KEY, (err, usuario) => {
    if (err) return res.status(403).json({ message: "Token invalido" });
    req.usuario = usuario;
    next();
  });
};
export default autenticadorToken;
