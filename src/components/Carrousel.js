import { useState } from "react"
import "../styles/Carrousel.scss"
import arrowLeft from "../assets/arrow_left.png"
import arrowRight from "../assets/arrow_right.png"


export default function Carrousel({pictures, totalSlide}) {
    const [slide, setSlide] = useState(0)
    const [currentSlide, setCurrentSlide] = useState(1)
    return(
        <div className='carrousel'>
            <img src={pictures} alt="Slider" className='carrousel__background'/>
            {totalSlide !== 1 ? 
            <div>
                <img src={arrowLeft} alt="arrow-left" className='carrousel__left'/>
                <img src={arrowRight} alt="arrow-right" className='carrousel__right'/>
                <p>{`${currentSlide}/${totalSlide}`}</p>
            </div> 
            : ""}
        </div>
    )
}