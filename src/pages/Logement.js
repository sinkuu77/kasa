import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import LogementContents from '../components/LogementContents'
import Carrousel from '../components/Carrousel'
import Collapse from '../components/Collapse'
import styles from '../styles/Logement.module.scss'

export default function Logement() {
  const [logements, setLogements] = useState([])
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetch('../logementData.json')
      .then((response) => response.json())
      .then((data) => {
        const logement = data.find((item) => String(item.id) === id)
        if (logement) {
          setLogements(logement)
        } else {
          navigate('/logement-non-trouver')
        }
      })
  }, [id, navigate])

  return (
    <div className={styles.logement__container}>
      <Carrousel
        pictures={logements.pictures}
        totalSlide={logements.pictures ? logements.pictures.length : ''}
      />
      <LogementContents
        id={logements.id}
        title={logements.title}
        location={logements.location}
        tags={logements.tags}
        rating={logements.rating}
        hostName={logements.host ? logements.host.name : ''}
        hostPic={logements.host ? logements.host.picture : ''}
      />
      <div className={styles.collapse}>
        <Collapse className={styles.collapse__description} value="Description">
          <p>{logements.description}</p>
        </Collapse>
        <Collapse className={styles.collapse__equipements} value="Équipements">
          <ul>
            {logements.equipments
              ? logements.equipments.map((equipment) => (
                  <li key={`${equipment}-${id}`}>{equipment}</li>
                ))
              : ''}
          </ul>
        </Collapse>
      </div>
    </div>
  )
}
