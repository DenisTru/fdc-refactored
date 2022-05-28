import { ThumbnailGalleryProps } from './Carousel.types'



export const ThumbnailGallery = ({photos, activePhoto, setActive} : ThumbnailGalleryProps) => {
  return (
    <div className='thumbnailGallery-container'>
    {photos.map((photo,index) => {
      return <img
      className={index === activePhoto ? 'thumbnail active': 'thumbnail'}
      src={photo.thumbnail_url} alt="thumbnail style"
      onClick={()=>setActive(index)}/>
    })}
    </div>
  )
}

//TODO: onclick handler, resize, scroll, styling