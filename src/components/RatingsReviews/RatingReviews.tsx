import { InformationPanel } from "./InformationPanel/InformationPanel"
import { ReviewPanel } from "./ReviewPanel/ReviewPanel"
import './RatingReviews.scss'

import { Button } from '@mantine/core';



export const RatingReviews = () => {


  return(
    <section className="ratingReviews-section">
      <InformationPanel />
      <ReviewPanel />
      <span className='buttons'>
      <Button
        variant="outline"
        color="gray"
        radius="xs"
        size="md"
        uppercase>
      More Reviews
    </Button>
    &nbsp;
    <Button
        variant="outline"
        color="gray"
        radius="xs"
        size="md"
        uppercase>
      Add A Review +
    </Button>
      </span>
    </section>
  )
}