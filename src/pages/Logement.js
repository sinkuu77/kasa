import { useNavigate, useParams } from 'react-router-dom'

export default function Logement() {
    const { id } = useParams()
    const navigate = useNavigate()
    navigate("/logement-non-trouver")
    return (
        <h1>Hello</h1>
    )
}