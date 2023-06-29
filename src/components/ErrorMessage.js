import { Link } from 'react-router-dom'
import '../styles/ErrorMessage.scss'

export default function ErrorMessage() {
  return (
    <div className="error__container">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/" className="error__container--link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  )
}
