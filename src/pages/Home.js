import Banner from "../components/Banner"
import Gallery from "../components/Gallery"
import "../styles/base.scss"

export default function Home() {
    return <div className='home__container'>
    <Banner /> 
    <Gallery />
    </div>
}