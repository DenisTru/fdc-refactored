import {ItemDetailsProps } from '.././types/InformationPanel.types'
import './styles/ItemDetails.scss'
import { StyleSelector } from './StyleSelector';

export const ItemDetails= ({category, name, styles, showcasedPhoto, setShowcasedPhoto} : ItemDetailsProps) => {
  const activeStyle = styles[showcasedPhoto];
  return (
    <section>
    {/* <span className='ItemDetails category'>{category}</span>
    <br/>
    <span className='ItemDetails name'>{name}</span>
    <br/>
    {
      activeStyle.sale_price ? <>
      <span className="ItemDetails price">${activeStyle.original_price}</span>
      <span className="ItemDetails price sale"> ${activeStyle.sale_price}</span>
      </>
      : <span className="ItemDetails price">${activeStyle.original_price}</span>
    }
    <br/>
    <span className="ItemDetails style-name">Style {'>'} {activeStyle.name}</span> */}
    <StyleSelector styles={styles} activeStyle={activeStyle} setActiveStyle={setShowcasedPhoto}/>
    </section>
  )
}