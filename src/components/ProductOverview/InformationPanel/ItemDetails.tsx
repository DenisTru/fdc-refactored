import {ItemDetailsProps } from '.././types/InformationPanel.types'
import './styles/ItemDetails.scss'
import { StarReviews } from './StarReviews';
import { StyleSelector } from './StyleSelector';

export const ItemDetails= ({category, name, styles, activeStyle, setActiveStyle} : ItemDetailsProps) => {
  return (
    <section>
    <StarReviews rating={2.3}/>
    <br/>
    <span className='ItemDetails category'>{category}</span>
    <br/>
    <span className='ItemDetails name'>{name}</span>
    <br/>
    {
      activeStyle.sale_price ? <>
      <span className="ItemDetails price">${activeStyle.sale_price}</span>
      <span className="ItemDetails price sale">${activeStyle.original_price}</span>
      </>
      : <span className="ItemDetails price">${activeStyle.original_price}</span>
    }
    <br/>
    <span className="ItemDetails style-name">Style {'>'} {activeStyle.name}</span>
    <StyleSelector styles={styles} activeStyle={activeStyle} setActiveStyle={setActiveStyle}/>
    </section>
  )
}