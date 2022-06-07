import { useEffect, useRef, useState } from "react";
import { SizeQuantitySelectionProps } from "../types/InformationPanel.types"
import { Select } from '@mantine/core';
import './styles/SizeQuantitySelector.scss'
import { usePrevious } from '../../../utils/usePrevious';
import { Checkout } from './Checkout';

export const SizeQuantitySelection = ({skus}: SizeQuantitySelectionProps) => {
const [skuSize, setSkuSize] = useState('');
const [quantity, setQuantity] = useState('');
const [selectASize, setSelectASize] = useState(false);
const [checkoutSuccessState, setCheckoutSuccessState] = useState(false)
const prevActiveSkus = usePrevious(skus);
const prevActiveSize = usePrevious(skuSize);

useEffect(()=> {
  //if style changes, reset these state items
  if(prevActiveSkus !== skus) {
    setQuantity('1');
    setSkuSize('');
    setSelectASize(false)
  }
  //if size changes from default to an item, remove error
  if((prevActiveSize === null || prevActiveSize === '') && prevActiveSize !== skuSize) {
    setSelectASize(false);
  }
}, [prevActiveSkus, prevActiveSize, skus, skuSize]);

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
}).filter((_item, index) => {
  return index < 15
}) : ''

const selectASizeHandler = () => {
  skuSize === '' ?
  setSelectASize(true):
  setSelectASize(false);
}

return (
  <>
    <div className="sizequantity-container">
    {sizesAvailable.length > 0 ?
    <Select
      disabled={checkoutSuccessState ? true : false}
      className="select size"
      value={skuSize}
      onChange={(e: string) => setSkuSize(e)}
      placeholder="Size"
      data={sizesAvailable}
      error={selectASize ? <p> Please select a size !</p> : ''}
    />:
      <OutOfStock sizeOrStock={true} />}
    {quantityAvailable ?
    <Select
      disabled={checkoutSuccessState ? true : false}
      className="select quantity"
      value={quantity}
      onChange={(e: string) => setQuantity(e)}
      placeholder="QTY"
      data={quantityAvailable}
    />: <OutOfStock sizeOrStock={false} />}
    </div>
    {
     sizesAvailable.length > 0 ?
     <Checkout
     size={skuSize}
     quantity={quantity}
     selectASizeHandler={selectASizeHandler}
     checkoutSuccessState={checkoutSuccessState}
     setCheckoutSuccessState={setCheckoutSuccessState}/>:''
    }
  </>
  )
}


type outOfStockProps = {
  sizeOrStock: boolean
}
const OutOfStock = ({sizeOrStock}: outOfStockProps) => {
  return <Select disabled
  placeholder={sizeOrStock ? "OOS" : '-'}
  className={sizeOrStock? "select" : "select quantity"}
  data={[{ value: '',label: 'OOS', disabled: true}]}
/>
}