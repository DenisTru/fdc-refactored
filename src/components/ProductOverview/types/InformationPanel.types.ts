export type StarReviewsProps = {
  rating: number
}

export type ItemDetailsProps = {
  category: Product["category"]
  name: Product["name"]
  styles : Style[]
  showcasedPhoto: number
  setShowcasedPhoto: React.Dispatch<React.SetStateAction<number>>
}

export type StyleSelectorProps = {
  styles: Style[]
  activeStyle: Style
  setActiveStyle: React.Dispatch<React.SetStateAction<number>>
}


export interface Product {
  id:            number;
  campus:        string;
  name:          string;
  slogan:        string;
  description:   string;
  category:      string;
  default_price: string;
  created_at:    Date;
  updated_at:    Date;
  features:      Feature[];
}

export interface Feature {
  feature: string;
  value:   string;
}

export interface Style {
  style_id:       number;
  name:           string;
  original_price: string;
  sale_price:     null | string;
  "default?":     boolean;
  photos:         Photo[];
  skus: {[key: string] : skus | undefined};
}

export interface Photo {
  thumbnail_url: string;
  url:           string;
}
export interface skus {
  quantity: number;
  size:     string;
}
