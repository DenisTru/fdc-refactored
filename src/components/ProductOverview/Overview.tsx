import { Carousel } from './ImageCarousel/Carousel'
import {SetStateAction, useState, useCallback} from 'react';
import {mockProduct, mockItemStyles} from '../../mockData';
import { ItemDetails } from './InformationPanel/ItemDetails';
import { StyleSelector } from './InformationPanel/StyleSelector';
import { SizeQuantitySelection } from './InformationPanel/SizeQuantitySelection';
import { StarReviews } from './InformationPanel/StarReviews';
import { DescriptionFooter } from './DescriptionFooter';
import './Overview.scss';

export const Overview = () => {
  const [styleSelection,setActiveStyle] = useState(0);
  const activeStyle = mockItemStyles[styleSelection];
  const handleStyleClick = useCallback((e: SetStateAction<number>) => {
    setActiveStyle(e)
  },[]);

  return (
  <section className='overview'>
    <div className="carousel-wrapper">
    <Carousel style={activeStyle}/>
    </div>
    <div className="infoPanel">
    <StarReviews rating={2.3}/>
    <ItemDetails
    category={mockProduct.category}
    name={mockProduct.name}
    activeStyle={activeStyle}
    />
    <StyleSelector styles={mockItemStyles} activeStyle={activeStyle} setActiveStyle={handleStyleClick}/>
    <SizeQuantitySelection
    skus={activeStyle.skus}
    />
    </div>
    <DescriptionFooter slogan={mockProduct.slogan} description={mockProduct.description} />
  </section>)
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