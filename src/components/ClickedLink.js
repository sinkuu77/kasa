import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import styles from '../styles/ClickedLink.module.scss'

export default function ClikedLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={isActive ? styles.active : null}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
