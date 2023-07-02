import Banner from '../components/Banner'
import BannerImg from '../assets/IMG.png'
import Gallery from '../components/Gallery'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.home__container}>
      <Banner>
        <div className={styles.home__banner}>
          <img src={BannerImg} alt="mountain" />
        </div>
        <h1>Chez vous, partout et ailleurs</h1>
        <p>
          Chez vous,
          <br /> partout et ailleurs
        </p>
      </Banner>
      <Gallery />
    </div>
  )
}
