import { CarouselProps } from '../types/Carousel.types'
import './styles/Carousel.scss'
import { BsFillArrowRightSquareFill } from 'react-icons/bs'
import { ThumbnailGallery } from './ThumbnailGallery';

export const Carousel = ({styles,showcasedPhoto, setShowcasedPhoto}: CarouselProps) => {
  return (
<div className="carousel flex">
 <ThumbnailGallery
  className="flex-child"
  photos={styles.photos}
  activePhoto={showcasedPhoto}
  setActive={setShowcasedPhoto}/>
<div className ="carousel-container flex-child">
{styles.photos.map((photo, index) => {
  return <div className={index === showcasedPhoto ? 'active':'carousel-slide'}>
    <img className="carousel fade" src={photo.url} alt={styles.name}></img>
  </div>
})}
<BsFillArrowRightSquareFill className="previous" onClick={()=> {return showcasedPhoto > 0 ? setShowcasedPhoto(showcasedPhoto - 1): setShowcasedPhoto(styles.photos.length-1)}}/>
<BsFillArrowRightSquareFill className="next" onClick={() => {return showcasedPhoto < styles.photos.length - 1 ? setShowcasedPhoto(showcasedPhoto + 1): setShowcasedPhoto(0)}} />
  </div>
  </div>
  )
}

/*  {<img className="carousel showcase" src={styles.photos[showcasedPhoto].url } alt={styles.name}></img>}
  <div className='carousel-dots-container'>
  {styles.photos.map((_photo,index) => {
    return <span className={showcasedPhoto === index ? 'dot-active' : 'dot'} onClick={() => setShowcasedPhoto(index)}></span>
  })}
  </div>
*/