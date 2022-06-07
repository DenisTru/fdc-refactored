import { Dispatch, SetStateAction } from "react"


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
  showcasedPhoto: number
  showcasedPhotoUrl: string
  photos: Style["photos"]
  setShowcasedPhotoUrl: React.Dispatch<React.SetStateAction<string>>
  setShowcasedPhoto: Dispatch<SetStateAction<number>>
}

export interface Style {
  photos:Photo[]
  name: string
  }

export interface Photo {
    thumbnail_url: string;
    url:           string;
  }

