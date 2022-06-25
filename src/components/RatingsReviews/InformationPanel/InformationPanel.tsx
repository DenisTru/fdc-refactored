import './styles/InformationPanel.scss'
import {StarReviews} from './StarReviews'


export const InformationPanel = () => {

  return (
    <aside className="ratings-panel">
    <h1>Rating & Reviews</h1>
    <span className="avg-rating">3.5</span>
    <span className="star-rating"><StarReviews rating={3.5}/></span>
    <p>100% of reviews recommend this product</p>
    <div className="avg-star-ratings">
      <li><h5>5 stars</h5> <StarBar starName={'star5'}/></li>
      <li><h5>4 stars</h5> <StarBar starName={'star4'}/></li>
      <li><h5>3 stars</h5> <StarBar starName={'star3'}/></li>
      <li><h5>2 stars</h5> <StarBar starName={'star2'}/></li>
      <li><h5>1 stars</h5> <StarBar starName={'star1'}/></li>
    </div>


    {/* <div>Size</div>
    <div>-------!------- </div> */}
    </aside>
  )
};

type StarBarProps = {
  starName: 'star1'|'star2'|'star3'|'star4'|'star5'
}


const StarBar = ({starName}: StarBarProps) => {
  return (
    <span className="star-bar">
      <span className={starName.toString()}>test</span>
    </span>
  )
}