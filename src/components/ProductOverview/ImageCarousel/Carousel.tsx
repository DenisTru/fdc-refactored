import { CarouselProps } from '../types/Carousel.types'
import './styles/Carousel.scss'
import { BsFillArrowRightSquareFill } from 'react-icons/bs'
import { ThumbnailGallery } from './ThumbnailGallery';
import { useState } from 'react';

export const Carousel = ({style}: CarouselProps) => {
  const [showcasedPhoto,setShowcasedPhoto] = useState(0);

  return (
<div className="carousel flex">
 <ThumbnailGallery
  className="flex-child"
  photos={style.photos}
  activePhoto={showcasedPhoto}
  setActive={setShowcasedPhoto}/>
<div className ="carousel-container flex-child">
{style.photos.map((photo, index) => {
  return <div className={index === showcasedPhoto ? 'active':'carousel-slide'}>
    <img className="carousel fade" src={photo.url} alt={style.name}></img>
  </div>
})}
<BsFillArrowRightSquareFill className="previous" onClick={()=> {return showcasedPhoto > 0 ? setShowcasedPhoto(showcasedPhoto - 1): setShowcasedPhoto(style.photos.length-1)}}/>
<BsFillArrowRightSquareFill className="next" onClick={() => {return showcasedPhoto < style.photos.length - 1 ? setShowcasedPhoto(showcasedPhoto + 1): setShowcasedPhoto(0)}} />
  </div>
  </div>
  )
}

/*  {<img className="carousel showcase" src={style.photos[showcasedPhoto].url } alt={style.name}></img>}
  <div className='carousel-dots-container'>
  {style.photos.map((_photo,index) => {
    return <span className={showcasedPhoto === index ? 'dot-active' : 'dot'} onClick={() => setShowcasedPhoto(index)}></span>
  })}
  </div>
*/