import { InformationPanel } from "./InformationPanel/InformationPanel"
import { ReviewPanel } from "./ReviewPanel/ReviewPanel"
import './RatingReviews.scss'

export const RatingReviews = () => {


  return(
    <section className="ratingReviews-section">
      <ReviewPanel />
    </section>
  )
}