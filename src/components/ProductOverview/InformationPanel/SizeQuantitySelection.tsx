import { SizeQuantitySelectionProps } from "../types/InformationPanel.types"
import { Select } from '@mantine/core';

export const SizeQuantitySelection = ({skus}: SizeQuantitySelectionProps) => {
const sizesAvailable = Object.entries(skus).filter((size) => {
  if(size[1]?.quantity) {
    return size[1]?.quantity
  }
  return 0
}).map((item) => {
  if(item[1]?.size){
    return item[1]?.size
  }
  return '#Error'
});
console.log(sizesAvailable)


  return (
    <>
    {sizesAvailable.length > 0 ?
    <Select clearable
      placeholder="Choose a size"
      data={sizesAvailable}
    />:
    <Select disabled
      placeholder="OUT OF STOCK"
      data={[{ value: '',label: 'OUT OF STOCK', disabled: true}]}
    />
    }
    </>
  )
}