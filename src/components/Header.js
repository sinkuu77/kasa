import logo from '../assets/LOGO-navbar.png'
import styles from '../styles/Header.module.scss'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

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

function ClikedLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={isActive ? styles.active : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
