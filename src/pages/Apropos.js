import Banner from "../components/Banner"
import BannerImg from "../assets/IMG-propos.png"
import "../styles/base.scss"
import Collapse from '../components/Collapse'

export default function Apropos() {
    return <div className='propos__container'>
        <Banner>
        <div>
            <img  src={BannerImg} alt='scenery of mountain'/>
        </div>
        </Banner>
        <Collapse />
    </div>
}