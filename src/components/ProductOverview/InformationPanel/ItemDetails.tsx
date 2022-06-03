import {ItemDetailsProps } from '.././types/InformationPanel.types'
import './styles/ItemDetails.scss'

export const ItemDetails= ({category, name, activeStyle} : ItemDetailsProps) => {
  return (
    <div className="itemDetails-container">
    <span className='itemDetails category'>{category}</span>
    <br/>
    <span className='itemDetails name'>{name}</span>
    <br/>
    {
      activeStyle.sale_price ? <>
      <div>
      <span className="itemDetails price">${activeStyle.sale_price}</span>
      <span className="itemDetails price sale">${activeStyle.original_price}</span>
      </div>
      </>
      : <span className="itemDetails price">${activeStyle.original_price}</span>
    }
    <br/>
    <span className="itemDetails style-name">Style {'>'} {activeStyle.name}</span>
    </div>
  )
}