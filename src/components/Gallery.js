import {useState, useEffect} from "react"
import styles from "../styles/Gallery.module.scss"
import ThumbCards from './ThumbCards'



export default function Gallery() {
    const [logements, setLogements] = useState([])
    useEffect(getLogement, [])

    function getLogement() {
        fetch("logementData.json")
        .then((response) => response.json())
        .then((data) => setLogements(data))
    }
    return <section className={styles.section}>
        <div>
            <ul>
            {logements.map((logement) => (
                <ThumbCards 
                    key={logement.id}
                    cover={logement.cover}
                    title={logement.title}
                />
            ))}
            </ul>
        </div>
    </section>
}