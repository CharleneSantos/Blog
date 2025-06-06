
import styles from './Register.module.css'
import Button from '../../components/Button'



import { useState, useEffect } from 'react'


const Register = () => {
  const [displayname, setDisplayname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    setError("")
    const user = {
      displayname,
      email,
      password
    }

    if (password !== confirmPassword) {
      setError("As senhas digitadas não são iguais")
      return
    }

    console.log(user)
  }


  return (
    <div className={styles.Register}>
      <h1>Cadastre-se para postar</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayname"
            required
            placeholder="Nome do usuário"
            value={displayname}
            onChange={(e) => setDisplayname(e.target.value)}
          />
        </label>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Crie sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <span>Confirmação de Senha:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <Button cor="primario">Cadastrar</Button>
        {error && <p className='error'>{error}</p>}
        <Button cor="">Cancelar</Button>
      </form>
    </div>
  )
}

export default Register
