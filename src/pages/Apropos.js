import Banner from "../components/Banner"
import BannerImg from "../assets/IMG-propos.png"
import "../styles/base.scss"
import Collapse from '../components/Collapse'
import { CollapseData } from '../datas/CollapseData'

export default function Apropos() {
    return <div className='propos__container'>
        <Banner>
        <div>
            <img  src={BannerImg} alt='scenery of mountain'/>
        </div>
        </Banner>
        {CollapseData.map(({ index, value, content }) => (
                <Collapse 
                    key={`${value}-${index}`}
                    value={value}
                > 
                <p>{content}</p>
                </Collapse >
            ))}
    </div>
}