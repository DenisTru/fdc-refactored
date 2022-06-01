import { StyleSelectorProps } from '.././types/InformationPanel.types'
import { AiFillCheckCircle } from 'react-icons/ai'
import './styles/StyleSelector.scss'
import {v4 as uuidv4} from 'uuid';


export const StyleSelector = ({styles, activeStyle, setActiveStyle}: StyleSelectorProps)=> {
  const perRow = 4
  const styleMatrix = styles.reduce((resultArray: typeof styles[], style, index) => {
    const chunkIndex = Math.floor(index/perRow)
    if(!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [] // start a new row
    }
    resultArray[chunkIndex].push(style)
    return resultArray
  }, [])

  return(
  <div className='row'>
    {styleMatrix.map((row,indexRow) => {
      return <div
      key={indexRow}
      className="column">
          {row.map((style,indexCol) => {
            return (
            <div key={uuidv4()} className="thumbnail-container">
            <img
            onClick={()=>{setActiveStyle(indexRow * 4 + indexCol)}}
            key={style.photos[0].thumbnail_url + indexCol}
            className={activeStyle === style ? "style-thumbnail active": "style-thumbnail" }
            src={style.photos[0].thumbnail_url} alt={style.name} />
            {activeStyle === style ? <AiFillCheckCircle className='checkMark' /> : ''}
            </div>
            )
          })}
        </div>
    })}
</div>
  )
}

// styles.map((style,index) => {
//   return (
//     <img className="style-thumbnail" src={style.photos[0].thumbnail_url} alt={style.name} />
//      )
//    }
//   )