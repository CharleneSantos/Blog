import styles from './Navbar.module.css'

import { NavLink } from "react-router-dom"



function Navbar() {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.logo}>
        <img src="../icon3.svg" alt="" className={styles.logo} />

      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : "")}>Entrar</NavLink>
        </li>
        <li>
          <NavLink to="/Register" className={({ isActive }) => (isActive ? styles.active : "")}>Cadastrar</NavLink>
        </li>
        <li>
          <NavLink to="/About" className={({ isActive }) => (isActive ? styles.active : "")}>Sobre</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
