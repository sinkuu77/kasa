import styles from "../styles/Banner.module.scss"
import BannerImg from "../assets/IMG.png"

export default function Banner() {
    return <section className={styles.section}>
        <div className={styles.section__container}>
            <div>
                <img  src={BannerImg} alt='mountain'/>
            </div>
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    </section>
}