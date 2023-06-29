import Banner from '../components/Banner'
import BannerImg from '../assets/IMG.png'
import Gallery from '../components/Gallery'
import '../styles/base.scss'

export default function Home() {
  return (
    <div className="home__container">
      <Banner>
        <div>
          <img src={BannerImg} alt="mountain" />
        </div>
        <h1>Chez vous, partout et ailleurs</h1>
      </Banner>
      <Gallery />
    </div>
  )
}
