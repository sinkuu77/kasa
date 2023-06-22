import { useNavigate, useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import LogementContents from '../components/LogementContents'
import Carrousel from "../components/Carrousel"
import Collapse from '../components/Collapse'

export default function Logement() {
    
    const [logements, setLogements] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()
    
    useEffect(() => {
        fetch("../logementData.json")
        .then((response) => response.json())
        .then((data) => {data.find((logement) => String(logement.id) === id) ? 
        setLogements(data.find((logement) => String(logement.id))) : 
        navigate("/logement-non-trouver")})
    }, [id])

    return (
        <div className='logement__container'>
        <Carrousel key={logements.id} pictures={logements.pictures[0]} />
        <LogementContents 
            title={logements.title}
            rating={logements.rating}
        />
        <Collapse
            value="Description"
        >{logements.description}</Collapse>
        </div>
    )
}