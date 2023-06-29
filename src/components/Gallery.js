import { useState, useEffect } from 'react'
import styles from '../styles/Gallery.module.scss'
import ThumbCards from './ThumbCards'

export default function Gallery() {
  const [logements, setLogements] = useState([])
  useEffect(getLogement, [])

  function getLogement() {
    fetch('logementData.json')
      .then((response) => response.json())
      .then((data) => setLogements(data))
      .catch((error) => console.error(error))
  }
  return (
    <section className={styles.gallery}>
      <div className={styles.gallery__container}>
        <ul>
          {logements.map((logement) => (
            <ThumbCards
              id={logement.id}
              key={logement.id}
              cover={logement.cover}
              title={logement.title}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}
