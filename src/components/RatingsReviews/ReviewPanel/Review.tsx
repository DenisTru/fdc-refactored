
import { StarReviews } from "../StarReviews"
import { AiFillCheckCircle } from 'react-icons/ai'
import './styles/Review.scss'

export const Review = () => {
  return (
  <div className="review">
  <span className="review-rating"><StarReviews rating={3.5}/>
  <ReviewUser
  recommend={mockReview.recommend}
  date={mockReview.date}
  reviewer_name={mockReview.reviewer_name}/>
  </span>
  <h5 className="review-title">{mockReview.summary}</h5>
  <p>...line, if necessary</p>
  <p>{mockReview.body}</p>
  <p>Helpful? <span className='review-underline'>Yes</span> ({mockReview.helpfulness}) | <span className='review-underline'>Report</span></p>
  <hr/>
  </div>
  )
}

const ReviewUser = ({reviewer_name, date, recommend}:ReviewUserProps) => {
  const reviewDate = new Date(date);
  let formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(reviewDate);

  return(
    <>
    <span className="review-name-date">
      {recommend ? <AiFillCheckCircle className="review-checkmark"/> : ''}&nbsp; {reviewer_name}, {formattedDate}
    </span>
    </>
  )
}

export interface ReviewUserProps {
  recommend:     boolean;
  date:          string;
  reviewer_name: string;
}

export interface Photo {
  id:  number;
  url: string;
}

const mockReview =  {
  "review_id": 5,
  "rating": 3,
  "summary": "I'm enjoying wearing these shades",
  "recommend": true,
  "response": null,
  "body": "Comfortable and practical.",
  "date": "2019-04-14T00:00:00.000Z",
  "reviewer_name": "shortandsweeet",
  "helpfulness": 5,
  "photos": [{
      "id": 1,
      "url": "urlplaceholder/review_5_photo_number_1.jpg"
    },
    {
      "id": 2,
      "url": "urlplaceholder/review_5_photo_number_2.jpg"
    },
  ]
}
