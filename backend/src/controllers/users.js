import users from "../dados/dados.js";

export const listarUsuarios = (req, res) => {
  console.log("Dentro do Ednpoint");
  res.status(200).send(users);
};

export const obterUsuario = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === Number(id));
  console.log(user);
  res.status(200).send(user);
};
