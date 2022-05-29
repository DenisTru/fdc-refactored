import React, {useRef, useEffect} from 'react'
import { ThumbnailGalleryProps } from './Carousel.types'



export const ThumbnailGallery = ({photos, activePhoto, setActive} : ThumbnailGalleryProps) => {
  const imageRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (null !== imageRef.current) {
      imageRef.current.scrollIntoView({});
    }

  });

  return (
    <div className='thumbnailGallery-container'>
    {photos.map((photo,idx) => {
      return <img
      className={idx === activePhoto ? 'thumbnail active': 'thumbnail'}
      src={photo.thumbnail_url} alt="thumbnail style"
      onClick={()=>{setActive(idx)}}
      ref={idx === activePhoto ? imageRef: null}/>
    })}
    </div>
  )
}

//TODO: onclick handler, resize, scroll, styling