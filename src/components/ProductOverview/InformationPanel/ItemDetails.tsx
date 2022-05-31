import {ItemDetailsProps } from '.././types/InformationPanel.types'

export const ItemDetails= ({category, name, styles} : ItemDetailsProps) => {
  return (
    <section>
    <span>Item Category </span>
    <br/>
    <span>Item Name</span>
    <br/>
    <span>Item Price</span>
    <br/>
    <span>Style {'>'} Forest Green & Black</span>
    </section>
  )
}