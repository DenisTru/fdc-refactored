//carousel only needs photos of the style to display
export type CarouselProps = {
  styles: Styles
}


export interface Styles {
  photos:Photo[]
  name: string
  }

export interface Photo {
    thumbnail_url: string;
    url:           string;
  }
