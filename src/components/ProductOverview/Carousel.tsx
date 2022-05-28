import { CarouselProps } from './Carousel.types'
import {useState} from 'react';
import './styles/Carousel.scss'

export const Carousel = ({styles}: CarouselProps) => {
  const [showCasedPhoto, setShowCasedPhoto] = useState(0);

  return (
    <>
  {<img className="carousel showcase" src={styles.photos[showCasedPhoto].url } alt={styles.name}></img>}
  </>
  )
}