import { Button } from "@mantine/core"
import { useState } from "react"
import {IoBagCheckOutline} from 'react-icons/io5'
import './styles/Checkout.scss'

export const Checkout = () => {
  const [loading,setLoading] = useState(false);
  const [checkoutSuccessState, setCheckoutSuccessState] = useState(false)

  return (
    <div className ="checkout-container">
    <Button
    loading={loading}
    onClick={()=>{
      setLoading(true);
      setTimeout(()=> {
        setLoading(false);
        setCheckoutSuccessState(true);
      },1700)
      setTimeout(()=> {
        setCheckoutSuccessState(false);
      },3000)
      }
    }
    rightIcon={checkoutSuccessState ? <IoBagCheckOutline /> : ''}
    loaderPosition="right"
    variant="default"
    size="lg">
      Checkout
    </Button>
    </div>
  )
}