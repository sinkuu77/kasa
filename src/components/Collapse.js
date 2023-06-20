import { CollapseData } from "../datas/CollapseData"
import CollapseCards from './CollapseCards'
import styles from "../styles/Collapse.module.scss"


export default function Collapse() {
    return (
        <ul className={styles.collapse__list}>
            {CollapseData.map(({ index, value, content }) => (
                <CollapseCards 
                    key={`${value}-${index}`}
                    value={value}
                    content={content}
                />
            ))}
        </ul>
    )
}