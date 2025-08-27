import { useState } from 'react'

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

type CarouselProp = {
    imgs: string[]
}

const Carousel = ({ imgs }: CarouselProp) => {
    const [ index, setIndex ] = useState(0)

    const next = () => setIndex((index + 1) % imgs.length)
    const prev = () => setIndex((index - 1 + imgs.length) % imgs.length)

    return(
        <section id="carousel">
            <button className='carousel-btn' id="carousel-prev" onClick={prev}><FaArrowLeft /></button>
            <img src={imgs[index]} alt="carousel" />
            <button className='carousel-btn' id="carousel-next" onClick={next}><FaArrowRight /></button>
        </section>
    )
}

export default Carousel