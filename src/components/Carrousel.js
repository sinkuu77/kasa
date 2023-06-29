import { useState } from 'react'
import '../styles/Carrousel.scss'
import arrowLeft from '../assets/arrow_left.png'
import arrowRight from '../assets/arrow_right.png'

export default function Carrousel({ pictures, totalSlide }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const getPrevImg = () => {
    setCurrentSlide(currentSlide === 0 ? totalSlide - 1 : currentSlide - 1)
  }
  const getNextImg = () => {
    setCurrentSlide(currentSlide === totalSlide - 1 ? 0 : currentSlide + 1)
  }
  return (
    <div className="carrousel">
      {pictures
        ? pictures.map((picture, index) => (
            <div
              key={`${picture}-${index}`}
              className={
                index === currentSlide
                  ? 'carrousel__container active'
                  : 'carrousel__container'
              }
            >
              {index === currentSlide && (
                <img
                  src={picture}
                  alt="an accomodation"
                  className="carrousel__container--background"
                />
              )}
            </div>
          ))
        : ''}
      {totalSlide !== 1 ? (
        <div>
          <img
            src={arrowLeft}
            alt="arrow-left"
            className="carrousel__left"
            onClick={getPrevImg}
          />
          <img
            src={arrowRight}
            alt="arrow-right"
            className="carrousel__right"
            onClick={getNextImg}
          />
          <p>{`${currentSlide + 1}/${totalSlide}`}</p>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
