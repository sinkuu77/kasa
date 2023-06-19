import Banner from "../components/Banner"
import BannerImg from "../assets/IMG-propos.png"
import "../styles/base.scss"

export default function Apropos() {
    return <div className='propos__container'>
        <Banner>
        <div>
            <img  src={BannerImg} alt='scenery of mountain'/>
        </div>
        </Banner>
    </div>
}