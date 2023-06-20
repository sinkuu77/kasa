import Icon from "../assets/ICON-arrow.png"
import "../styles/CollapseCards.scss"
import {useState} from "react"

export default function CollapseCards({index, value, content}) {
    const [rotate, setRotate] = useState(false)
    const onRotate = () => {
        setRotate((current) => !current)
    }

    return (
        <li key={index} className="collapse">
            <div className="collapse__container">
                <h2>{value}</h2>
                <img src={Icon} alt='arrow icon' className={rotate ? "active" : ""} onClick={onRotate}/>
            </div>
            <div className={rotate? "collapse__opened" : "collapse__content"}>
                <p>{content}</p>
            </div>
        </li>
    )
}