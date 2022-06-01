import { Carousel } from './ImageCarousel/Carousel'
import {useState} from 'react';
import {mockProduct, mockItemStyles} from '../../mockData';
import { ItemDetails } from './InformationPanel/ItemDetails';

export const Overview = () => {
  const [showcasedPhoto,setShowcasedPhoto] = useState(0);
  const [styleSelection,setActiveStyle] = useState(0)
  const activeStyle = mockItemStyles[styleSelection];
//IMAGE CAROUSEL
//-needs to show an image
//- needs to be able change image
//future, zoom and full screen modal
//also need to add a thumbnail gallery component to it, might be better to use global state and seperate them though


  return (
  <div className='overview'>
    <ItemDetails
    category={mockProduct.category}
    name={mockProduct.name}
    styles={mockItemStyles}
    activeStyle={activeStyle}
    setActiveStyle={setActiveStyle}
    showcasedPhoto={showcasedPhoto}
    setShowcasedPhoto={setShowcasedPhoto}/>
{/* <Carousel
showcasedPhoto={showcasedPhoto}
setShowcasedPhoto={setShowcasedPhoto}
style={activeStyle}
/> */}
  </div>)
}


/*
LIST OF FEATURES
IMAGE CAROUSEL
INFO PANEL:
STAR RATING
ITEM STYLES
SIZE SELECTOR
ADD TO CART

BOTTOM BAR:
DESCRIPITION
SOCIAL SHARING






*/