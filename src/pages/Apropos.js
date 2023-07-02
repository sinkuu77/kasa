import Banner from '../components/Banner'
import BannerImg from '../assets/IMG-propos.png'
import '../styles/base.scss'
import Collapse from '../components/Collapse'
import { CollapseData } from '../datas/CollapseData'

export default function Apropos() {
  return (
    <div className="propos__container">
      <Banner>
        <div>
          <img src={BannerImg} alt="scenery of mountain" />
        </div>
      </Banner>
      {CollapseData.map(({ index, value, content }) => (
        <div key={`${value}-${index}`} className="propos__container--collapse">
          <Collapse value={value}>
            <p>{content}</p>
          </Collapse>
        </div>
      ))}
    </div>
  )
}
