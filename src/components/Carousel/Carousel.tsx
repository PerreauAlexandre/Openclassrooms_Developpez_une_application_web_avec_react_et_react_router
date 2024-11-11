import { useState } from 'react'
import './Carousel.scss'
import { CarouselProps } from '../../type'

function Carousel({ pictures }: CarouselProps) {
  const [index, setIndex] = useState<number>(0)

  function previousImage() {
    setIndex(index === 0 ? pictures.length - 1 : index - 1)
  }

  function nextImage() {
    setIndex(index === pictures.length - 1 ? 0 : index + 1)
  }

  return (
    <div id="carousel">
      <img src={pictures[index]} alt="Images du logement" />
      <button className="previous" onClick={previousImage}>
        précédent
      </button>
      <button className="next" onClick={nextImage}>
        suivant
      </button>
      <div className="index">
        {index + 1}/{pictures.length}
      </div>
    </div>
  )
}

export default Carousel
