import { InformationPanel } from "./InformationPanel/InformationPanel"
import { ReviewPanel } from "./ReviewPanel/ReviewPanel"
import './RatingReviews.scss'

import { Button } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useState } from "react";


export const RatingReviews = () => {
  const largeScreen = useMediaQuery('(min-width:600px)');
  const [reviewCount, setReviewCount] = useState(2);
  const handleCount = () => {
    console.log(reviewCount === mockReviews.length)
    setReviewCount(reviewCount+2);
  }
  return(
    <section className="ratingReviews-section">
      <InformationPanel />
      <ReviewPanel
      setReviewCount={setReviewCount}
      reviewCount={reviewCount} />
      <span className='buttons'>
      <Button
        variant="outline"
        color="gray"
        radius="xs"
        size={largeScreen ? 'md' : 'xs'}
        onClick={handleCount}
        style={reviewCount === mockReviews.length  || mockReviews.length === 0 ? { display: 'none' } : {}}
        uppercase>
      More Reviews
    </Button>
    &nbsp;
    <Button
        variant="outline"
        color="gray"
        radius="xs"
        size={largeScreen ? 'md' : 'xs'}
        uppercase>
      Add A Review +
    </Button>
      </span>
    </section>
  )
}

const mockReviews = [
  {
    "review_id": 5,
    "rating": 3,
    "summary": "I'm enjoying wearing these shades",
    "recommend": false,
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
      // ...
    ]
  },
  {
    "review_id": 3,
    "rating": 4,
    "summary": "I am liking these glasses",
    "recommend": false,
    "response": "Glad you're enjoying the product!",
    "body": "They are very dark. But that's good because I'm in very sunny spots",
    "date": "2019-06-23T00:00:00.000Z",
    "reviewer_name": "bigbrotherbenjamin",
    "helpfulness": 5,
    "photos": [],
  },
  {
    "review_id": 4,
    "rating": 4,
    "summary": "I am liking these glasses",
    "recommend": false,
    "response": "Glad you're enjoying the product!",
    "body": "They are very dark. But that's good because I'm in very sunny spots",
    "date": "2019-06-23T00:00:00.000Z",
    "reviewer_name": "bigbrotherbenjamin",
    "helpfulness": 5,
    "photos": [],
  },
  {
    "review_id": 6,
    "rating": 4,
    "summary": "I am liking these glasses",
    "recommend": false,
    "response": "Glad you're enjoying the product!",
    "body": "They are very dark. But that's good because I'm in very sunny spots",
    "date": "2019-06-23T00:00:00.000Z",
    "reviewer_name": "bigbrotherbenjamin",
    "helpfulness": 5,
    "photos": [],
  },
  // ...
]