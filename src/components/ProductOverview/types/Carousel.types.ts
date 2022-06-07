

//carousel only needs photos of the style to display
export type CarouselProps = {
  style: Style
}

export type ThumbnailGalleryProps = {
  className?: string
  photos: Style["photos"]
  activePhoto: number
  setActive: React.Dispatch<React.SetStateAction<number>>
}

export type ImageModalProps = {
  showcasedPhotoUrl: string
  setShowcasedPhotoUrl: React.Dispatch<React.SetStateAction<string>>
}

export interface Style {
  photos:Photo[]
  name: string
  }

export interface Photo {
    thumbnail_url: string;
    url:           string;
  }

