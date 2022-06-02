import { SizeQuantitySelectionProps } from "../types/InformationPanel.types"
import { Select } from '@mantine/core';

export const SizeQuantitySelection = ({skus}: SizeQuantitySelectionProps) => {
const sizesAvailable = Object.entries(skus).filter((size) => {
  if(size[1]?.quantity) {
    return size[1]?.quantity
  }
  return 0
}).map((item) => {
    return item[1]?.size!
});
console.log(sizesAvailable)


  return (
    <>
   <Select clearable
      placeholder="Choose a size"
      data={sizesAvailable}
    />
    </>
  )
}