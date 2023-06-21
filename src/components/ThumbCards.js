import { Link } from "react-router-dom"
import  styles from "../styles/ThumbCards.module.scss"

export default function ThumbCards({ id, title, cover }) {
        return (
            <Link to={`/logement/${id}`} className={styles.thumbCards}>
                <li key={id}>
                    <div className={styles.thumbCards__container}>
                        <img src={cover} alt={`${title} cover`}/>
                        <h2>{title}</h2>
                    </div>
                </li>
            </Link>
        )
    }