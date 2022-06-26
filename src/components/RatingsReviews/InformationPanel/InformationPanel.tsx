import './styles/InformationPanel.scss'
import {StarReviews} from '../StarReviews'


export const InformationPanel = () => {
  return (
    <aside className="ratings-panel">
    <h1>Rating & Reviews</h1>
    <span className="avg-rating">3.5</span>
    <span className="star-rating"><StarReviews rating={3.5}/></span>
    <p>100% of reviews recommend this product</p>
    <div className="avg-star-ratings">
      <li><h5>5 stars</h5> <StarBar rating={'50%'} starName={'star5'}/></li>
      <li><h5>4 stars</h5> <StarBar rating={'20%'} starName={'star4'}/></li>
      <li><h5>3 stars</h5> <StarBar rating={'15%'} starName={'star3'}/></li>
      <li><h5>2 stars</h5> <StarBar rating={'10%'} starName={'star2'}/></li>
      <li><h5>1 stars</h5> <StarBar rating={'5%'} starName={'star1'}/></li>
    </div>
    <div className='avg-trait-ratings'>
    <li>
    <h5>Size</h5>
    <TraitsBar rating={"3.5"} />
    </li>
    <li>
    <h5>Comfort</h5>
    <TraitsBar rating={"3.5"} />
    </li>
    <li>
    <h5>Quality</h5>
    <TraitsBar rating={"3.5"} />
    </li>
    </div>
    </aside>
  )
};

type StarBarProps = {
  starName: 'star1'|'star2'|'star3'|'star4'|'star5'
  rating: string
}
const StarBar = ({starName, rating}: StarBarProps) => {
  const styles = { "--rating": rating} as React.CSSProperties;

  return (
    <span className="star-bar">
      <span style={styles} className={starName.toString()}/>
    </span>
  )
}

type TraitsBarProps = {
  rating: string
}
const TraitsBar = ({rating}: TraitsBarProps) => {
 return (<div className="trait-rating">
 <span className="scale"></span>
 <span className="scale"></span>
 <span className="scale black"></span>
 <span className="scale"></span>
 <span className="scale"></span>
 </div>)
}