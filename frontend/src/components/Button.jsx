import styles from './Button.module.css'

const Button = ({ cor, children }) => {
  const corBotao = cor === "primario" ? styles.btn : styles.btnOposto
  return (
    <button className={corBotao}>{children}</button>
  )
}

export default Button
