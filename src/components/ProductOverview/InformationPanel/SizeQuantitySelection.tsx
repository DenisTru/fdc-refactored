import { useState } from "react";
import { SizeQuantitySelectionProps } from "../types/InformationPanel.types"
import { Select } from '@mantine/core';
import './styles/SizeQuantitySelector.scss'
export const SizeQuantitySelection = ({skus}: SizeQuantitySelectionProps) => {
const [skuSize, setSkuSize] = useState('');
const [quantity, setQuantity] = useState('')
//ONLY STOCKED SKUS available
const sizesAvailable  = Object.entries(skus).filter((sku) => {
  if(sku[1]?.quantity) {
    return sku[1]?.quantity;
  }
  return 0;
  }).map((item) => {
    if(item[1]?.size){
    return {value: item[1]?.size, label: item[1]?.size }
    }
      return ''
    });

const selectedSKU = Object.entries(skus).filter((sku) => {
  return sku[1]?.size === skuSize;
})[0]

const quantityAvailable = selectedSKU ? new Array(selectedSKU[1]?.quantity).fill(null).map((_, i) => {
  return {value:(i + 1).toString(), label: (i + 1).toString()}
}) : ''
  return (
    <div className="sizequantity-container">
    {
    sizesAvailable.length > 0 ?
    <Select clearable
      className="select size"
      value={skuSize}
      onChange={(e: string) => setSkuSize(e)}
      placeholder="Size"
      data={sizesAvailable}
    />:
      <OutOfStock sizeOrStock={true} />
    }
    {
    quantityAvailable ?
    <Select clearable
      className="select quantity"
      value={quantity}
      onChange={(e: string) => setQuantity(e)}
      placeholder="QTY"
      data={quantityAvailable}
    />:
      <OutOfStock sizeOrStock={false} />
    }
    </div>
  )
}


type outOfStockProps = {
  sizeOrStock: boolean
}
const OutOfStock = ({sizeOrStock}: outOfStockProps) => {
  return <Select disabled
  placeholder={sizeOrStock ? "OUT OF STOCK" : '-'}
  className={sizeOrStock? "select" : "select quantity"}
  data={[{ value: '',label: 'OUT OF STOCK', disabled: true}]}
/>
}