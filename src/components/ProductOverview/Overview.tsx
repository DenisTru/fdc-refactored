import { Carousel } from './ImageCarousel/Carousel'
import {mockProduct, mockItemStyles} from '../../mockData';
import { StarReviews } from './InformationPanel/StarReviews';

export const Overview = () => {

//IMAGE CAROUSEL
//-needs to show an image
//- needs to be able change image
//future, zoom and full screen modal
//also need to add a thumbnail gallery component to it, might be better to use global state and seperate them though


  return (
  <div>
    <StarReviews rating={3.5}/>
{/* <Carousel styles={mockItemStyles[0]}/> */}
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