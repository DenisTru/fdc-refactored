import { useState } from "react";
import { SizeQuantitySelectionProps } from "../types/InformationPanel.types"
import { Select } from '@mantine/core';
import { sizes } from "@mantine/core/lib/components/ActionIcon/ActionIcon.styles";

export const SizeQuantitySelection = ({skus}: SizeQuantitySelectionProps) => {
//ONLY STOCKED SKUS
const stockAvailable = Object.entries(skus).filter((size) => {
  if(size[1]?.quantity) {
    return size[1]?.quantity
  }
  return 0
})
//STOCKED SKU SIZES
const sizesAvailable = stockAvailable.map((item) => {
  if(item[1]?.size){
    return {value: item[1]?.size, label: item[1]?.size }
  }
  return ''
});

const [value, setValue] = useState('');
  return (
    <>
    {sizesAvailable.length > 0 ?
    <Select clearable
      value={value}
      onChange={(e: string)=> setValue(e)}
      placeholder="Choose a size"
      data={sizesAvailable}
    />:
      <OutOfStock sizeOrStock={true} />
    }
    </>
  )
}


type outOfStockProps = {
  sizeOrStock: boolean
}
const OutOfStock = ({sizeOrStock}: outOfStockProps) => {
  return <Select disabled
  placeholder={sizeOrStock ? "OUT OF STOCK" : '-'}
  data={[{ value: '',label: 'OUT OF STOCK', disabled: true}]}
/>
}