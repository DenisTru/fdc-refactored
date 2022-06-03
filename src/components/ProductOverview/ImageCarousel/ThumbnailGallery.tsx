import React, {useRef, useEffect} from 'react'
import { ThumbnailGalleryProps } from '../types/Carousel.types'
import { usePrevious } from '../../../utils/usePrevious';

export const ThumbnailGallery = ({photos, activePhoto, setActive} : ThumbnailGalleryProps) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const prevActivePhoto = usePrevious(activePhoto);

  useEffect(() => {
    if (null !== imageRef.current) {
      imageRef.current.scrollIntoView({behavior:'smooth', block: 'center'});
    }
    if(prevActivePhoto === activePhoto) {
      setActive(0)
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