import { ImageModalProps } from "../types/Carousel.types"
import './styles/Carousel.scss'


export const ImageModal = ({showcasedPhotoUrl, setShowcasedPhotoUrl}: ImageModalProps) => {

  const handleClick = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if((e.target as Element).classList.contains('backdrop')) {
       setShowcasedPhotoUrl('');
    }
  }

  return (
    <div className="backdrop" onClick={(e)=>handleClick(e)}>
      <img src={showcasedPhotoUrl} alt="enlarged pic" />
    </div>
  )
}