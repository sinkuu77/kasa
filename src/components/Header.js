import logo from '../assets/LOGO-navbar.png'
import styles from '../styles/Header.module.scss'
import ClikedLink from './ClickedLink'

export default function Header() {
  return (
    <header>
      <nav className={styles.header}>
        <img src={logo} alt="header logo" />
        <ul>
          <ClikedLink to="/">Accueil</ClikedLink>
          <ClikedLink to="/apropos">A Propos</ClikedLink>
        </ul>
      </nav>
    </header>
  )
}
