import { CarouselProps } from '../types/Carousel.types'
import './styles/Carousel.scss'
import { BsFillArrowRightSquareFill } from 'react-icons/bs'
import { ThumbnailGallery } from './ThumbnailGallery';
import { ImageModal } from './ImageModal';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

export const Carousel = ({style}: CarouselProps) => {
  const [showcasedPhoto,setShowcasedPhoto] = useState(0);
  const [showcasedPhotoURL, setShowcasedPhotoURL] = useState('')

  return (
<div className="carousel ">
 <ThumbnailGallery
  photos={style.photos}
  activePhoto={showcasedPhoto}
  setActive={setShowcasedPhoto}/>
  <div className ="imageshowcase-container">
{style.photos.map((photo, index) => {
  return <div key={uuidv4()}
  className={index === showcasedPhoto ? "carousel-slide-active":'carousel-slide'}
  onClick={index === showcasedPhoto ? ()=>{setShowcasedPhotoURL(style.photos[showcasedPhoto].url)} : ()=>{}}>
    <img
    className="carousel fade"
    src={photo.url}
    alt={style.name} />
  </div>
})}
{ showcasedPhoto !== 0 ?
  <BsFillArrowRightSquareFill className="previous" onClick={()=> {return showcasedPhoto > 0 ? setShowcasedPhoto(showcasedPhoto - 1): setShowcasedPhoto(style.photos.length-1);}}/> :
  ''
}
{ showcasedPhoto !== style.photos.length - 1 ?
  <BsFillArrowRightSquareFill className="next" onClick={() => {return showcasedPhoto < style.photos.length - 1 ? setShowcasedPhoto(showcasedPhoto + 1): setShowcasedPhoto(0)}} /> :
  ''
}
  </div>
  {showcasedPhotoURL && <ImageModal showcasedPhotoUrl={showcasedPhotoURL} setShowcasedPhotoUrl={setShowcasedPhotoURL} />}
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