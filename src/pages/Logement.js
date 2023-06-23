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
        .then((data) => {setLogements(data.find(logement => String(logement.id) === id))})
        .catch((error) => {
            navigate("/logement-non-trouver")
        })
    }, [id, navigate])


    return (
        <div className='logement__container'>
        <Carrousel 
            key={id} 
            pictures={logements.cover}
            // totalSlide={logements.pictures.length}
            />
        <LogementContents 
            title={logements.title}
            location={logements.location}
            rating={logements.rating}
            // hostName={logements.host.name}
            // hostPic={logements.host.picture}
        />
        <Collapse
            value="Description"
        ><p>{logements.description}</p></Collapse>
        <Collapse
            value="Équipements"
        ><ul>{logements.equipments}</ul></Collapse>
        </div>
    )
}