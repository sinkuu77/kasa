import icon from '../assets/ICON-arrow.png'
import { useState } from 'react'
import '../styles/Collapse.scss'

export default function Collapse({ index, value, children }) {
  const [rotate, setRotate] = useState(false)
  const onRotate = () => {
    setRotate((current) => !current)
  }

  return (
    <div key={index} className="collapse">
      <div className="collapse__container">
        <h2>{value}</h2>
        <img
          src={icon}
          alt="arrow icon"
          className={rotate ? 'active' : ''}
          onClick={onRotate}
        />
      </div>
      <div className={rotate ? 'collapse__opened' : 'collapse__content'}>
        {children}
      </div>
    </div>
  )
}
