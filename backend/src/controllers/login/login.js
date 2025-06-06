const Login = async (email, senha) => {
  if (!email) {
    throw new Error("Favor informar o email");
  } else if (!senha) {
    throw new Error("Favor informar a senha");
  }
};
