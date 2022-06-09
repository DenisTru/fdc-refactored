import { ImageModalProps } from "../types/Carousel.types"
import { BsFillArrowRightSquareFill } from 'react-icons/bs'
import './styles/Carousel.scss'
import { motion } from "framer-motion"

export const ImageModal = ({showcasedPhotoUrl, setShowcasedPhotoUrl, showcasedPhoto, setShowcasedPhoto, photos}: ImageModalProps) => {

  const handleClick = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if((e.target as Element).classList.contains('backdrop')) {
       setShowcasedPhotoUrl('');
    }
  }

  return (
    <motion.div className="backdrop" onClick={(e)=>handleClick(e)}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
    >
      <motion.img src={showcasedPhotoUrl} alt="enlarged pic"
      initial={{ y: '-90vh'}}
      animate={{ y: '0vh'}}
      />
      <div className="carousel-dots-container">
        {photos.map((_photo,index) => {
          return <div key={index} className={index === showcasedPhoto ? "dot-active" : "dot"}
          onClick={() => {
            setShowcasedPhoto(index);
            setShowcasedPhotoUrl(photos[index].url)
          }}/>
        })}
      </div>

      { showcasedPhoto !== 0 ?
      <BsFillArrowRightSquareFill
      className="previous"
      onClick={()=>
        { if(showcasedPhoto > 0) {
          setShowcasedPhoto(showcasedPhoto - 1)
          }
          return setShowcasedPhotoUrl(photos[showcasedPhoto - 1].url)
        }}/> : ''
      }
      { showcasedPhoto !== photos.length - 1 ?
        <BsFillArrowRightSquareFill
         className="next"
         onClick={() =>
          {
            if(showcasedPhoto < photos.length) {
              setShowcasedPhoto(showcasedPhoto + 1)
            }
            return  setShowcasedPhotoUrl(photos[showcasedPhoto + 1].url)
          }} /> : ''
      }
    </motion.div>
  )
}