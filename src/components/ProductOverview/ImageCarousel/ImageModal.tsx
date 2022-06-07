import { ImageModalProps } from "../types/Carousel.types"
import './styles/Carousel.scss'
import { motion } from "framer-motion"

export const ImageModal = ({showcasedPhotoUrl, setShowcasedPhotoUrl}: ImageModalProps) => {

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
    </motion.div>
  )
}