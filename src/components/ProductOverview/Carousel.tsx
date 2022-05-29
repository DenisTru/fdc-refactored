import { CarouselProps } from './Carousel.types'
import {useState} from 'react';
import './styles/Carousel.scss'
import { BsArrowRightSquare } from 'react-icons/bs'
import { ThumbnailGallery } from './thumbnailGallery';

export const Carousel = ({styles}: CarouselProps) => {
  const [showCasedPhoto, setShowCasedPhoto] = useState(0);
  return (
<div className="carousel flex">
 <ThumbnailGallery
  className="flex-child"
  photos={styles.photos}
  activePhoto={showCasedPhoto}
  setActive={setShowCasedPhoto}/>
<div className ="carousel-container flex-child">
{styles.photos.map((photo, index) => {
  return <div className={index === showCasedPhoto ? 'active':'carousel-slide'}>
    <img className="carousel fade" src={photo.url} alt={styles.name}></img>
  </div>
})}
<BsArrowRightSquare className="previous" onClick={()=> {return showCasedPhoto > 0 ? setShowCasedPhoto(showCasedPhoto - 1): setShowCasedPhoto(styles.photos.length-1)}}/>
<BsArrowRightSquare className="next" onClick={() => {return showCasedPhoto < styles.photos.length - 1 ? setShowCasedPhoto(showCasedPhoto + 1): setShowCasedPhoto(0)}} />
  </div>
  </div>
  )
}

/*  {<img className="carousel showcase" src={styles.photos[showCasedPhoto].url } alt={styles.name}></img>}
  <div className='carousel-dots-container'>
  {styles.photos.map((_photo,index) => {
    return <span className={showCasedPhoto === index ? 'dot-active' : 'dot'} onClick={() => setShowCasedPhoto(index)}></span>
  })}
  </div>
*/