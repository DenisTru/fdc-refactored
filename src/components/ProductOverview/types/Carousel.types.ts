//carousel only needs photos of the style to display
export type CarouselProps = {
  styles: Styles
  showcasedPhoto: number
  setShowcasedPhoto: React.Dispatch<React.SetStateAction<number>>
}


export interface Styles {
  photos:Photo[]
  name: string
  }

export interface Photo {
    thumbnail_url: string;
    url:           string;
  }

export type ThumbnailGalleryProps = {
  className?: string
  photos: Styles["photos"]
  activePhoto: number
  setActive: React.Dispatch<React.SetStateAction<number>>
}