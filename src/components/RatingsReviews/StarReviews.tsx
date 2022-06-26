import React from "react"
import './StarReviews.scss'
import { StarReviewsProps } from '../ProductOverview/types/InformationPanel.types'


export const StarReviews = (props: StarReviewsProps) => {
  const styles = { "--rating": props.rating} as React.CSSProperties;

  return (
    <span className="stars-container">
        <div className="Stars" style={styles} aria-label="Rating of this product is 2.3 out of 5."></div>
    </span>
  )
}