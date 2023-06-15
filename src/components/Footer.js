import footerLogo from "../assets/LOGO-footer.png"
import styles from "../styles/Footer.module.scss"


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <img src={footerLogo} alt='footer logo'/>
                <h3>© 2020 Kasa. All rights reserved</h3>
            </div>
        </footer>
    )
}