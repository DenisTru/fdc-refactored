import { Button } from "@mantine/core"
import { useState } from "react"
import {IoBagCheckOutline} from 'react-icons/io5'
import './styles/Checkout.scss'
import { CheckoutProps } from "../types/InformationPanel.types"

export const Checkout = ({size, quantity, selectASizeHandler, checkoutSuccessState, setCheckoutSuccessState}:CheckoutProps) => {
  const [loading,setLoading] = useState(false);

  return (
    <div className ="checkout-container">
    {<Button
    loading={loading}
    onClick={()=>{
      if (!size){
        selectASizeHandler();
      }
      else{
        selectASizeHandler();
        setLoading(true);
        setCheckoutSuccessState(true);
        setTimeout(()=> {
          setLoading(false);
        },1200)
        setTimeout(()=> {
          setCheckoutSuccessState(false);
        },2400)

      }

      }
    }
    rightIcon={checkoutSuccessState ? <IoBagCheckOutline /> : ''}
    loaderPosition="right"
    variant="default"
    size="lg">
      Checkout
    </Button>}
    </div>
  )
}