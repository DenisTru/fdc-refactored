import { InformationPanel } from "./InformationPanel/InformationPanel"
import { ReviewPanel } from "./ReviewPanel/ReviewPanel"
import './RatingReviews.scss'

import { Button } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';


export const RatingReviews = () => {
  const largeScreen = useMediaQuery('(min-width:600px)');

  return(
    <section className="ratingReviews-section">
      <InformationPanel />
      <ReviewPanel />
      <span className='buttons'>
      <Button
        variant="outline"
        color="gray"
        radius="xs"
        size={largeScreen ? 'md' : 'xs'}
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