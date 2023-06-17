import { Link } from "react-router-dom"
import styles from "../styles/ThumbCards.module.scss"

export default function ThumbCards({ id, title, cover }) {
        return (
            <Link to="/">
                <li key={id}>
                    <img src={cover} alt={`${title} cover`}/>
                    <div style={styles.thumb__title}>
                        <h2>{title}</h2>
                    </div>
                </li>
            </Link>
        )
    }