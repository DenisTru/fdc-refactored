
import { StarReviews } from "../StarReviews"
import './styles/Review.scss'

export const Review = () => {
  return (
  <div className="review">
  <span className="review-rating"><StarReviews rating={3.5}/>  <ReviewUser/> </span>
  <h5>Review title with word-break truncation to prevent wrapping onto the next..</h5>
  <p>...line, if necessary</p>
  <p>Donut gummi bears gummies chocolate,ice cream apple pie, tiramisu, fruitecake chupa</p>
  <span>Helpful? Yes(10) | Report</span>
  <hr/>
  </div>
  )
}


const ReviewUser = () => {
  return(
    <span>
      User1234, January 1,2019
    </span>
  )
}