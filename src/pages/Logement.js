import { useNavigate, useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import starActive from "../assets/star-active 1.png"
import starInactive from "../assets/star-inactive 1.png"
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
        .then((data) => {
            const logement = data.find((item) => String(item.id) === id)
            if (logement) {
                setLogements(logement)
            } else {
                navigate("/logement-non-trouver")
            }
        })
    }, [id, navigate])


    return (
        <div className='logement__container'>
        <Carrousel 
            pictures={logements.cover}
            totalSlide={logements.pictures ? logements.pictures.length : ""}
            />
        <LogementContents 
            id={logements.id}
            title={logements.title}
            location={logements.location}
            tags={logements.tags}
            //rating={logements.rating ? [...Array(+logements.rating)].map((star) => <img key={`${id}-${star}`}src={starActive} alt='pink star'/>) : ""}
            hostName={logements.host ? logements.host.name : ""}
            hostPic={logements.host ? logements.host.picture : ""}
        />
        <Collapse
            value="Description"
        ><p>{logements.description}</p></Collapse>
        <Collapse
            value="Équipements"
        ><ul>{logements.equipments ? logements.equipments.map((equipment) => <li key={`${equipment}-${id}`}>{equipment}</li>) : ""}</ul></Collapse>
        </div>
    )
}