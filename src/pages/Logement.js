import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import LogementContents from '../components/LogementContents'
import Carrousel from '../components/Carrousel'
import Collapse from '../components/Collapse'
import styles from '../styles/Logement.module.scss'

export default function Logement() {
  const [logement, setLogement] = useState()
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetch('../logementData.json')
      .then((response) => response.json())
      .then((data) => {
        const logement = data.find((item) => String(item.id) === id)
        if (logement) {
          setLogement(logement)
        } else {
          navigate('/logement-non-trouver')
        }
      })
      .catch((error) => console.error(error))
  }, [id, navigate])

  return (
    <>
      {logement && (
        <div className={styles.logement__container}>
          <Carrousel
            pictures={logement.pictures}
            totalSlide={logement.pictures ? logement.pictures.length : null}
          />
          <LogementContents
            id={logement.id}
            title={logement.title}
            location={logement.location}
            tags={logement.tags}
            rating={logement.rating}
            hostName={logement.host ? logement.host.name : null}
            hostPic={logement.host ? logement.host.picture : null}
          />
          <div className={styles.collapse}>
            <Collapse value="Description" className={styles.custom}>
              <p>{logement.description}</p>
            </Collapse>
            <Collapse value="Équipements" className={styles.custom}>
              <ul>
                {logement.equipments
                  ? logement.equipments.map((equipment) => (
                      <li key={`${equipment}-${id}`}>{equipment}</li>
                    ))
                  : null}
              </ul>
            </Collapse>
          </div>
        </div>
      )}
    </>
  )
}
