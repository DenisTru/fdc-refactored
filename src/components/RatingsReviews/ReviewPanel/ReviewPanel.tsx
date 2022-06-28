import { useState } from "react";
import { Review } from "./Review";
import './styles/ReviewPanel.scss'
import { Select } from '@mantine/core';
import { FiChevronDown } from 'react-icons/fi'
import { off } from "process";

interface ReviewPanelProps {
  setReviewCount: (count: number) => void;
  reviewCount: number;
}

type sort = {
  filterString: 'newest' | 'relevance' | 'helpful'
}

export const ReviewPanel = ({reviewCount, setReviewCount}: ReviewPanelProps) => {
  const [sort, setSort] = useState<sort['filterString']>('relevance');
  const handleSelect = (e : sort['filterString'])  => {
    console.log(e)
    setSort(e)
  }

  const reviews = mockReviews.map((review, index) => {
    if(index < reviewCount) {
      return <li key={index}>{<Review review_id={review.review_id} rating={review.rating} summary={review.summary} recommend={review.recommend} response={review.response} body={review.body} date={review.date} reviewer_name={review.reviewer_name} helpfulness={review.helpfulness} photos={review.photos} />}</li>
    }
    return ''
  })

  const sortedReviews= function(sort:sort['filterString']) {
    if(sort === 'newest') {
      return mockReviews.sort((a,b) => {
        return new Date(b.date).valueOf() - new Date(a.date).valueOf();
      }).map((review, index) => {
        if(index < reviewCount) {
          return <li key={index}>{<Review review_id={review.review_id} rating={review.rating} summary={review.summary} recommend={review.recommend} response={review.response} body={review.body} date={review.date} reviewer_name={review.reviewer_name} helpfulness={review.helpfulness} photos={review.photos} />}</li>
        }
        return ''
      }
      )
    }
    if(sort === 'helpful') {

    }
    if(sort === 'relevance') {

    }

    return reviews;
  }



  return (
    <>
    <span className="reviewPanel-description">248 reviews, sorted by&nbsp;
      {<Select
      size="sm"
      value={sort}
      onChange={handleSelect}
      rightSection={<FiChevronDown size="16px"/>}
      rightSectionWidth={60}
      style={{width: '100px', display: 'inline-block', textDecoration: 'underline'}}
      styles={{ rightSection: { pointerEvents: 'none' } }}
      variant="unstyled"
      maxDropdownHeight={280}
      data={['helpful', 'newest', 'relevance']}/>}
      </span>
      <ol className="review-list">
        {sortedReviews(sort)}
      </ol>
    </>
  );
}

//   <li className="first-bullet"><Review/></li>


const mockReviews = [
  {
    "review_id": 5,
    "rating": 3,
    "summary": "I'm enjoying wearing these shades",
    "recommend": false,
    "response": null,
    "body": "Comfortable and practical.",
    "date": "2019-04-12T00:00:00.000Z",
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
    "date": "2019-06-25T00:00:00.000Z",
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
    "date": "2019-06-20T00:00:00.000Z",
    "reviewer_name": "bigbrotherbenjamin",
    "helpfulness": 5,
    "photos": [],
  },
  // ...
]