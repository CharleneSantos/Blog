const Login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const token = await serviceUser.Login(email, senha);

    res.status(200).send({ token });
  } catch (error) {
    res.status(500).send({ msg: e.message });
  }
};

export default Login;
