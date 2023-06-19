import styles from "../styles/Banner.module.scss"


export default function Banner({children}) {
    return <section className={styles.section}>
        <div className={styles.section__container}>
            {children}
        </div>
    </section>
}